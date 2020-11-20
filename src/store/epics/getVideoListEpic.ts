import { AxiosError } from 'axios';
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActionType, getType } from 'typesafe-actions';

import { getVideos } from '../../apis';
import { actionsList } from '../rootAction';

const { getVideoListAction } = actionsList;

type RequestActionType = ActionType<typeof getVideoListAction.request>;

const getVideoListEpic = (action$: Observable<RequestActionType>) => {
  return action$.pipe(
    ofType(getType(getVideoListAction.request)),
    switchMap((action: RequestActionType) => {
      const { queryText } = action.payload;

      return getVideos(queryText)
        .then(resp => getVideoListAction.success({ data: resp.data }))
        .catch((error: AxiosError) => getVideoListAction.failure({ error }));
    })
  );
};

export default getVideoListEpic;

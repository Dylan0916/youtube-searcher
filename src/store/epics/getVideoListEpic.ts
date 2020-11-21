import { AxiosError } from 'axios';
import { ofType } from 'redux-observable';
import { Observable, from, of } from 'rxjs';
import { catchError, concatMap, switchMap } from 'rxjs/operators';
import { ActionType, getType } from 'typesafe-actions';

import { getVideos } from '../../apis';
import { RootAction, actionsList } from '../rootAction';

const { getVideoListAction } = actionsList;

type RequestActionType = ActionType<typeof getVideoListAction.request>;

const getVideoListEpic = (action$: Observable<RequestActionType>) => {
  return action$.pipe(
    ofType(getType(getVideoListAction.request)),
    switchMap((action: RequestActionType) => {
      const { queryText, loadingType, nextPageToken } = action.payload;

      return from(getVideos({ queryText, nextPageToken })).pipe(
        concatMap(resp => {
          const data = resp.data;
          const resultAction: RootAction[] = [
            getVideoListAction.success({
              data,
              loadingType,
            }),
          ];

          if (loadingType !== 'loadMore') {
            resultAction.push(
              getVideoListAction.request({
                queryText,
                loadingType: 'loadMore',
                nextPageToken: data.nextPageToken,
              })
            );
          }

          return resultAction;
        }),
        catchError((error: AxiosError) =>
          of(getVideoListAction.failure({ error }))
        )
      );
    })
  );
};

export default getVideoListEpic;

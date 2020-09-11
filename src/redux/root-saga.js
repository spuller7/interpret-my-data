import { all } from 'redux-saga/effects';
import authSagas from '@imd/redux/auth/saga';
import contactSagas from '@imd/redux/contacts/saga';
import invoicesSagas from '@imd/redux/invoice/saga';
import mailSagas from '@imd/redux/mail/saga';
import notesSagas from '@imd/redux/notes/saga';
import todosSagas from '@imd/redux/todos/saga';
import ecommerceSaga from '@imd/redux/ecommerce/saga';
import cardsSagas from '@imd/redux/card/saga';
import chatSagas from '@imd/redux/chat/sagas';
import youtubeSearchSagas from '@imd/redux/youtubeSearch/sagas';
import githubSagas from '@imd/redux/githubSearch/sagas';
import articles from '@imd/redux/articles/sagas';
import investors from '@imd/redux/investors/sagas';
import scrumBoardSaga from '@imd/redux/scrumBoard/saga';
import profileSaga from '@imd/redux/profile/saga';
import quizSaga from '@imd/redux/quiz/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    contactSagas(),
    mailSagas(),
    notesSagas(),
    todosSagas(),
    ecommerceSaga(),
    cardsSagas(),
    invoicesSagas(),
    chatSagas(),
    youtubeSearchSagas(),
    githubSagas(),
    articles(),
    investors(),
    scrumBoardSaga(),
    profileSaga(),
    quizSaga(),
  ]);
}

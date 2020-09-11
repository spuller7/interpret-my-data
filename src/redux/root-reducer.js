import { combineReducers } from 'redux';
import App from '@imd/redux/app/reducer';
import Auth from '@imd/redux/auth/reducer';
import Mails from '@imd/redux/mail/reducer';
import Calendar from '@imd/redux/calendar/reducer';
import Box from '@imd/redux/box/reducer';
import Notes from '@imd/redux/notes/reducer';
import Todos from '@imd/redux/todos/reducer';
import Contacts from '@imd/redux/contacts/reducer';
import Cards from '@imd/redux/card/reducer';
import Chat from '@imd/redux/chat/reducers';
import DynamicChartComponent from '@imd/redux/dynamicEchart/reducer';
import Ecommerce from '@imd/redux/ecommerce/reducer';
import ThemeSwitcher from '@imd/redux/themeSwitcher/reducer';
import Invoices from '@imd/redux/invoice/reducer';
import LanguageSwitcher from '@imd/redux/languageSwitcher/reducer';
import YoutubeSearch from '@imd/redux/youtubeSearch/reducers';
import Articles from '@imd/redux/articles/reducers';
import Investors from '@imd/redux/investors/reducers';
import scrumBoard from '@imd/redux/scrumBoard/reducer';
import drawer from '@imd/redux/drawer/reducer';
import modal from '@imd/redux/modal/reducer';
import profile from '@imd/redux/profile/reducer';
import githubSearch from '@imd/redux/githubSearch/reducers';
import quiz from '@imd/redux/quiz/reducer';

export default combineReducers({
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Mails,
  Calendar,
  Box,
  Notes,
  Todos,
  Contacts,
  Cards,
  Chat,
  DynamicChartComponent,
  Ecommerce,
  Invoices,
  YoutubeSearch,
  Articles,
  Investors,
  scrumBoard,
  modal,
  drawer,
  profile,
  githubSearch,
  quiz,
});

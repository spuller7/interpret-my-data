import { AutoComplete } from 'antd';
import { AntAutoComplete } from './styles/autoComplete.style';
import WithDirection from '@imd/lib/helpers/rtl';
const WDAutoCompletes = AntAutoComplete(AutoComplete);
const AutoCompletes = WithDirection(WDAutoCompletes);
const AutoCompleteOption = AutoComplete.Option;

export default AutoCompletes;
export { AutoCompleteOption };

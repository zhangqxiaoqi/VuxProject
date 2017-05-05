import Vue from 'vue';
import Router from 'vue-router';
import Box from '@/components/Box';
import Actionsheet from '../components/modules/Actionsheet/Actionsheet';
import Alert from '../components/modules/Alert/Alert';
import Badge from '../components/modules/Badge/Badge';
import Blur from '../components/modules/Blur/Blur';
import ButtonTab from '../components/modules/ButtonTab/ButtonTab';
import Calendar from '../components/modules/Calendar/Calendar';
import Card from '../components/modules/Card/Card';
import CellBox from '../components/modules/CellBox/CellBox';
import CellFormPreview from '../components/modules/CellFormPreview/CellFormPreview';
import Cell from '../components/modules/Cell/Cell';
import Check from '../components/modules/Check/Check';
import Checklist from '../components/modules/Checklist/Checklist';
import Clocker from '../components/modules/Clocker/Clocker';
import ColorPicker from '../components/modules/ColorPicker/ColorPicker';
import Confirm from '../components/modules/Confirm/Confirm';
import Countdown from '../components/modules/Countdown/Countdown';
import Countup from '../components/modules/Countup/Countup';
import DatetimeRange from '../components/modules/DatetimeRange/DatetimeRange';
import Datetime from '../components/modules/Datetime/Datetime';
import FormPreview from '../components/modules/FormPreview/FormPreview';
import InlineCalendar from '../components/modules/InlineCalendar/InlineCalendar';
import LoadMore from '../components/modules/LoadMore/LoadMore';
import Loading from '../components/modules/Loading/Loading';
import Marquee from '../components/modules/Marquee/Marquee';
import Masker from '../components/modules/Masker/Masker';
import Msg from '../components/modules/Msg/Msg';
import Panel from '../components/modules/Panel/Panel';
import Picker from '../components/modules/Picker/Picker';
import Popover from '../components/modules/Popover/Popover';
import PopupPicker from '../components/modules/PopupPicker/PopupPicker';
import PopupRadio from '../components/modules/PopupRadio/PopupRadio';
import Popup from '../components/modules/Popup/Popup';
import Previewer from '../components/modules/Previewer/Previewer';
import Radio from '../components/modules/Radio/Radio';
import Rater from '../components/modules/Rater/Rater';
import Scroller from '../components/modules/Scroller/Scroller';
import Search from '../components/modules/Search/Search';
import Sticky from '../components/modules/Sticky/Sticky';
import Swipeout from '../components/modules/Swipeout/Swipeout';
import Tab from '../components/modules/Tab/Tab';
import Tabbar from '../components/modules/Tabbar/Tabbar';
import XInput from '../components/modules/XInput/XInput';
import XTextarea from '../components/modules/XTextarea/XTextarea';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Box'
    },
    {
      path: '/Box',
      name: 'Box',
      component: Box
    },
    {
      path: '/Box/modules/Actionsheet/Actionsheet',
      name: 'Actionsheet',
      component: Actionsheet
    },
    {
      path: '/Box/modules/Alert/Alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/Box/modules/Badge/Badge',
      name: 'Badge',
      component: Badge
    },
    {
      path: '/Box/modules/Blur/Blur',
      name: 'Blur',
      component: Blur
    },
    {
      path: '/Box/modules/ButtonTab/ButtonTab',
      name: 'ButtonTab',
      component: ButtonTab
    },
    {
      path: '/Box/modules/Calendar/Calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/Box/modules/Card/Card',
      name: 'Card',
      component: Card
    },
    {
      path: '/Box/modules/CellBox/CellBox',
      name: 'CellBox',
      component: CellBox
    },
    {
      path: '/Box/modules/CellFormPreview/CellFormPreview',
      name: 'CellFormPreview',
      component: CellFormPreview
    },
    {
      path: '/Box/modules/Cell/Cell',
      name: 'Cell',
      component: Cell
    },
    {
      path: '/Box/modules/Check/Check',
      name: 'Check',
      component: Check
    },
    {
      path: '/Box/modules/Checklist/Checklist',
      name: 'Checklist',
      component: Checklist
    },
    {
      path: '/Box/modules/Clocker/Clocker',
      name: 'Clocker',
      component: Clocker
    },
    {
      path: '/Box/modules/ColorPicker/ColorPicker',
      name: 'ColorPicker',
      component: ColorPicker
    },
    {
      path: '/Box/modules/Confirm/Confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/Box/modules/Countdown/Countdown',
      name: 'Countdown',
      component: Countdown
    },
    {
      path: '/Box/modules/Countup/Countup',
      name: 'Countup',
      component: Countup
    },
    {
      path: '/Box/modules/DatetimeRange/DatetimeRange',
      name: 'DatetimeRange',
      component: DatetimeRange
    },
    {
      path: '/Box/modules/Datetime/Datetime',
      name: 'Datetime',
      component: Datetime
    },
    {
      path: '/Box/modules/FormPreview/FormPreview',
      name: 'FormPreview',
      component: FormPreview
    },
    {
      path: '/Box/modules/InlineCalendar/InlineCalendar',
      name: 'InlineCalendar',
      component: InlineCalendar
    },
    {
      path: '/Box/modules/LoadMore/LoadMore',
      name: 'LoadMore',
      component: LoadMore
    },
    {
      path: '/Box/modules/Loading/Loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/Box/modules/Marquee/Marquee',
      name: 'Marquee',
      component: Marquee
    },
    {
      path: '/Box/modules/Masker/Masker',
      name: 'Masker',
      component: Masker
    },
    {
      path: '/Box/modules/Msg/Msg',
      name: 'Msg',
      component: Msg
    },
    {
      path: '/Box/modules/Panel/Panel',
      name: 'Panel',
      component: Panel
    },
    {
      path: '/Box/modules/Picker/Picker',
      name: 'Picker',
      component: Picker
    },
    {
      path: '/Box/modules/Popover/Popover',
      name: 'Popover',
      component: Popover
    },
    {
      path: '/Box/modules/PopupPicker/PopupPicker',
      name: 'PopupPicker',
      component: PopupPicker
    },
    {
      path: '/Box/modules/PopupRadio/PopupRadio',
      name: 'PopupRadio',
      component: PopupRadio
    },
    {
      path: '/Box/modules/Popup/Popup',
      name: 'Popup',
      component: Popup
    },
    {
      path: '/Box/modules/Previewer/Previewer',
      name: 'Previewer',
      component: Previewer
    },
    {
      path: '/Box/modules/Radio/Radio',
      name: 'Radio',
      component: Radio
    },{
      path: '/Box/modules/Rater/Rater',
      name: 'Rater',
      component: Rater
    },{
      path: '/Box/modules/Scroller/Scroller',
      name: 'Scroller',
      component: Scroller
    },{
      path: '/Box/modules/Search/Search',
      name: 'Search',
      component: Search
    },{
      path: '/Box/modules/Sticky/Sticky',
      name: 'Sticky',
      component: Sticky
    },{
      path: '/Box/modules/Swipeout/Swipeout',
      name: 'Swipeout',
      component: Swipeout
    },{
      path: '/Box/modules/Tab/Tab',
      name: 'Tab',
      component: Tab
    },{
      path: '/Box/modules/Tabbar/Tabbar',
      name: 'Tabbar',
      component: Tabbar
    },{
      path: '/Box/modules/XInput/XInput',
      name: 'XInput',
      component: XInput
    },{
      path: '/Box/modules/XTextarea/XTextarea',
      name: 'XTextarea',
      component: XTextarea
    }
    
  ]
})

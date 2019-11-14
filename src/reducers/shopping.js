import TimeIcon from '@material-ui/icons/AccessTime';
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Accessibility';
import CreateIcon from '@material-ui/icons/Create'
import StoreIcon from '@material-ui/icons/Store'

const initialState = {
  categories: [
    {
      id: '1',
      name: 'シフト作成',
      icon: CreateIcon
    },
    {
      id: '2',
      name: 'バイト',
      icon: PersonIcon
    },
    {
      id: '3',
      name: 'スキル',
      icon: WorkIcon
    },
    {
      id: '4',
      name: '時間',
      icon: TimeIcon
    },
    {
      id: '5',
      name: 'お店',
      icon: StoreIcon
    }
  ]
};

export default () => initialState;
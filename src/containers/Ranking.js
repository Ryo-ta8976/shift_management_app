import { connect } from 'react-redux';
import Ranking from '../components/Ranking';
import * as actions from '../actions/Ranking';

//Reducerを定義後に実装します
const mapStateToProps = (state, ownProps) => ({ //ownProps:自身のProps。App.jsを確認。
  categoryId: ownProps.categoryId,

  category: state.Ranking.category,
  ranking: state.Ranking.ranking,
  error: state.Ranking.error
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  //onMountとonUpdateをfetchRankingを接続
  onMount(categoryId) {
    dispatch(actions.fetchRanking(categoryId));
  },
  onUpdate(categoryId) {
    dispatch(actions.fetchRanking(categoryId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
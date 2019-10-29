import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
  categories: state.shopping.categories
});

const mapDispatchToProps = dispatch => ({
  onClick(path) {
    dispatch(push(path)); //ActionCreatorを用いたルーティング。routerMiddlewareを追加すればpush()というActionCreator(API)を使用できる。
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
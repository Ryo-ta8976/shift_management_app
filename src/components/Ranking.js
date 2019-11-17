import React from 'react';
import PropTypes from 'prop-types';
import ControlledOpenSelect from './ControlledOpenSelect';
import MultipleDatePicker from 'react-multiple-datepicker'

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default class Ranking extends React.Component {
  //一番最初のrender()前に実行
  componentWillMount() {
    this.props.onMount(this.props.categoryId);
  }
  //propsが変更された
  componentnWillReceiveProps(nextProps) {
    if (this.props.categoryId !== nextProps.categoryId) {
      this.props.onUpdate(nextProps.categoryId);
    }
  }

  render() {
    const { category, ranking, error } = this.props;

    return (
      <div>
        <h2>{
          typeof category !== 'undefined'
            ? `${category.name}`
            : ''
        }</h2>
        <div>
          <h3>忙しい時間帯</h3>
          <div style={{ display: "flex" }}>
            <ControlledOpenSelect name='Start Time' /><ControlledOpenSelect name='End Time' />
          </div>
          <h3>繁忙期</h3>
          <MultipleDatePicker
            onSubmit={dates => console.log('selected date', dates)}
          />
          <h3>閑散期</h3>
          <MultipleDatePicker
            onSubmit={dates => console.log('selected date', dates)}
          />
        </div>

        {(() => {
          if (error) {
            return <p>エラーが発生しました。リロードしてください。</p>;
          } else if (typeof ranking === 'undefined') {
            return <p>読み込み中...</p>
          } else {
            return ranking.map((item, i) => (
              <Card
                key={`ranking-item-${item.code}`}
                style={{ maxWidth: '500px', margin: '32px auto' }}
              >
                <CardMedia
                  image={item.imageUrl}
                  title={`${i + 1}位${item.name}`}
                  style={{ height: '200px' }}
                />
                <CardContent>
                  <Typography type="title">
                    {`${i + 1}位${item.name}`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    raised
                    color="secondary"
                    fullWidthhref={item.url}
                  >商品ページへ</Button>
                </CardActions>
              </Card>
            ));
          }
        })()}
      </div>
    );
  }
}

Ranking.propTypes = {
  categoryId: PropTypes.string.isRequired,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,

  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  ranking: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.bool.isRequired
};
Ranking.defaultProps = {
  categoryId: '1'
};
//funkcja connect służy do łączenia komponentów do store
import {connect} from 'react-redux';
import CommentsList from './CommentsList';

//obiekt, który zwraca mapStateToProps, podpina konkretne wartości props do CommentsList
const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);

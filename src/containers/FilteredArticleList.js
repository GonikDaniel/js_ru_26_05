import { connect } from 'react-redux';
import ArticleList from '../components/ArticleList';

const getFilteredArticles = (articles, dateRange) => {
  return articles.filter((article) => {
    const date = new Date(article.date);
    if ((date <= dateRange.maxDate) &&
        (date >= dateRange.minDate)) {
      return article;
    }
  });
}

const mapStateToProps = (state) => {
  return {
    articles: getFilteredArticles(state.articles, state.datePickerFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const FilteredArticleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList)

export default FilteredArticleList

import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';

import Modal from './Modal/Modal';
import { fetchData } from './services/api';
import { Loader } from './Loader/Loader';

export class App extends React.Component {
  state = {
    posts: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,

    showLoadMore: false,

    modal: {
      isOpen: false,
      visibleData: null,
    },
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ posts: [], page: 1, loadMore: false });
      this.fetchPosts();
    }
    if (this.state.page !== prevState.page) this.loadMore();
  }

  fetchPosts = async () => {
    try {
      this.setState({ isLoading: true });
      const posts = await fetchData(this.state.query, this.state.page);
      toast.success(`We have found ${posts.total} results`);

      this.setState(prevState => ({
        posts: [...posts.hits],
        showLoadMore: posts.totalHits / this.state.page > 12,
      }));
    } catch (error) {
      toast.error(`Oops, some error occured ${error.message}`);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const newQuery = event.currentTarget[1].value;
    if (newQuery.trim().length === 0) {
      return toast.info('Please, enter your search query firstly');
    }
    if (this.state.query !== newQuery) {
      this.setState({ query: newQuery, page: 1 });
    }
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  loadMore = async () => {
    try {
      this.setState({ isLoading: true });
      const posts = await fetchData(this.state.query, this.state.page);

      this.setState(prevState => ({
        posts: [...prevState.posts, ...posts.hits],
        showLoadMore: posts.totalHits / this.state.page > 12,
      }));
    } catch (error) {
      toast.error(`Oops, some error occured ${error.message}`);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  onOpenModal = data => {
    this.setState({
      modal: {
        isOpen: true,
        visibleData: data,
      },
    });
  };
  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        visibleData: null,
      },
    });
  };

  render() {
    return (
      <div>
        {this.state.modal.isOpen && (
          <Modal
            visibleData={this.state.modal.visibleData}
            onCloseModal={this.onCloseModal}
          />
        )}
        {this.state.isLoading && <Loader />}
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          images={this.state.posts}
          onOpenModal={this.onOpenModal}
        />

        {this.state.showLoadMore && <Button onClick={this.incrementPage} />}

        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    );
  }
}

export default App;

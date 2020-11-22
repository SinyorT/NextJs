import React from 'react';
import Router from 'next/router'
import MovieCreateForm from '../../../components/movieCreateForm'
import { getMovieById, updateMovie } from '../../../actions'


class EditMovie extends React.Component {

    // static getInitialProps({ query }) {
    //     return { query }
    // }

    // state = {
    //     movie: {}
    // }

    static async getInitialProps({ query }) {
        const movie = await getMovieById(query.id)
        return { movie }
    }


    // componentDidMount() {
    //     const { id } = this.props.query

    //     getMovieById(id).then(movie => {
    //         this.setState({ movie })
    //     })
    // }

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((updatedMovie) => {
            Router.push('/movies/[id]', `/movies/${movie.id}`)
        })
    }

    render() {
        const { movie } = this.props
        return (
            <div>
                <div className="container">
                    <h1>Edit the Movie</h1>
                    <MovieCreateForm
                        submitButton="Update"
                        initialData={movie}
                        handleFormSubmit={this.handleUpdateMovie} />
                </div>
            </div>
        );
    }
}

export default EditMovie


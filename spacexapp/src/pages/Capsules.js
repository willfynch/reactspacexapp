import React, { Component } from 'react';
import Loading from '../components/Loading';
import APIFetcher from '../services/APIFetcher';
import CapsuleCard from '../components/CapsuleCard';
import Modal from '../components/Modal';


class Capsules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            capsules: [],
            isLoaded: false,
            isError: '',
            show: false,
            currentCapsule: {}
        }
    }

    componentDidMount() {
        const filters = [];
        APIFetcher.get('/capsules', filters)
            .then(res => this.setState({ capsules: res, isLoaded: !this.state.isLoaded }))
            .catch(reason => this.setState({ isError: reason }));
    }

    showModal = cap => {
        this.setState({ show: !this.state.show, currentCapsule: cap })
    }

    render() {
        const { capsules, isError, isLoaded, show } = this.state;
        if (isError.length !== 0) return console.log(isError);
        if (!isLoaded) return <Loading />
        return (
            <div className="d-flex flex-wrap bd-highlight example-parent flex-center">
                {
                    capsules.map(
                        capsule => {
                            return (
                                <div className="p-2 bd-highlight col-example" key={capsule.capsule_serial}>
                                    <CapsuleCard capsule={capsule} showModal={this.showModal} />
                                </div>
                            )
                        }
                    )

                }
                <Modal onClose={this.showModal} show={show} capsule={this.state.currentCapsule} />
            </div>
        )
    }
}

export default Capsules;
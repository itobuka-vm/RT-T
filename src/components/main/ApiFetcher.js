import React from "react"

class ApiFetcher extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({ loading: true })

    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          character: data
        })
      })
  }

  render() {
    return (
      <div>
        <h3>
          {this.state.loading ? "Loading . . . " : this.state.character.name}
        </h3>
      </div>
    )
  }
}

export default ApiFetcher

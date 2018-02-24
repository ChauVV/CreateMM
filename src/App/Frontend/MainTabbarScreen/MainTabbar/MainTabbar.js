import React from 'react'
import Select from 'react-select'

const LANGUAGES = [
  { label: 'English', flat: 'English.png' },
  { label: 'Chinese', flat: 'Chinese.png' },
  { label: 'Japanese', flat: 'Japanese.png' }
]
/**
 * Main Class
 * Render Tabbar
 */
class MainTabbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = ({
      dropdownValue: LANGUAGES[0]
    })
  }

  render () {
    const { Tabs, AppRouter } = this.props

    return (
      <div className="pane-group">
        <div className="pane-sm sidebar">
          <Tabs history={this.props.history}/>
          <div className="dropdown-language">
            <div className="select-up">
              <Select
                clearable={false}
                searchable={false}
                onChange={value => { this.setState({dropdownValue: value}) }}
                options={LANGUAGES}
                optionRenderer={this.renderValue}
                value={this.state.dropdownValue}
                valueRenderer={this.renderValue}
              />
            </div>
          </div>
        </div>
        <div className="pane"><AppRouter/></div>
      </div>
    )
  }
  /**
   * push first tab: ethereum tab
   */
  componentDidMount () {
    const { strMnemonic } = this.props.match.params
    this.props.history.push({ pathname: `/mainTabbar/ethereumView/${strMnemonic}` })
  }
  /**
   * Render dropdown option
   * @param {*} option row
   */
  renderValue (option) {
    return (
      <div className="dropdown-it">
        <img className="dropdown-img" src={require('*/images/flags/' + option.flat)} />
        <span className="dropdown-label-show">{option.label}</span>
      </div>
    )
  }
}

export default MainTabbar

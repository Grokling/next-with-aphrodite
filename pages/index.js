import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default class Index extends React.Component {
  componentDidMount(){
    if (typeof window !== 'undefined') {
      console.log('HYDRATING', window.__NEXT_DATA__.ids)
      StyleSheet.rehydrate(window.__NEXT_DATA__.ids)
    }
  }
  render() {
    return (
      <div className={css(styles.root)}>
        <h1 className={css(styles.title)}>My page</h1>
      </div>
    )
  }
}


const styles = StyleSheet.create({
  root: {
    width: 80,
    height: 60,
    background: 'white',
    ':hover': {
      background: 'black'
    }
  },

  title: {
    marginLeft: 5,
    color: 'black',
    fontSize: 22,
    ':hover': {
      color: 'white'
    }
  }
})

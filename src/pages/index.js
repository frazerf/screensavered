import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Flickity from 'react-flickity-component'

/*eslint-disable */
const fade = 
  typeof window !== "undefined"
    ? require("flickity-fade")
    : () => null
/*eslint-enable */

const flickityHeroOptions = {
  wrapAround: true,
  fullscreen: true,
  autoPlay: 5000,
  pauseAutoPlayOnHover: false,
  pageDots: false,
  prevNextButtons: false,
  fade: true
}

class Index extends React.Component {

  render() {
    const blogItem = this.props.data.allGoogleSheetSheet1Row.edges;
    

    return (
      <Layout>
      <div className="page-container">
        <Flickity
          className={'screensaver-carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityHeroOptions}
        >
          {blogItem.map(({ node }) => {
            var rand = Math.floor((Math.random() * 357));
            return (
            <div className="screensaver-carousel--item" style={{background: "hsl(" + rand +",56%,75%)"}} key={node.id}>
              <div className="content t-light">
                <h2 dangerouslySetInnerHTML={{__html:node.lyrics}} />
                <h5>{node.artist} - {node.song}</h5>
              </div>
            </div>
            )
          })}
        </Flickity>
      </div>
      </Layout>
    );
  }
}

export default Index

export const query = graphql`
  query {
    allGoogleSheetSheet1Row {
      edges {
        node {
          id
          artist
          lyrics
          song
          spotifylink
        }
      }
    }
  }
`;

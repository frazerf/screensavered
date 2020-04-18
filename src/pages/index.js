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
              <div className="screensaver-carousel--item" style={{background: "hsl(" + rand +",43%,80%)"}} key={node.id}>
                <div className="content t-light">
                  <h1 dangerouslySetInnerHTML={{__html:node.lyrics}} />
                  <div className="meta-holder">
                    <div class="meta">{node.artist} -</div>
                    <div class="meta">&nbsp;{node.song}</div>
                    {node.spotifylink !== null &&
                      <a href={node.spotifylink} target="_blank" rel="noopener noreferrer">
                        <span className="icon-spotify"></span>
                      </a>
                    }
                    {node.youtubelink !== null &&
                      <a href={node.youtubelink} target="_blank" rel="noopener noreferrer">
                        <span className="icon-youtube"></span>
                      </a>
                    }
                  </div>
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
          youtubelink
        }
      }
    }
  }
`;

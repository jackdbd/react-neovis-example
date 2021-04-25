import React, { useEffect, useRef } from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";
import Neovis from "neovis.js/dist/neovis.js";

const NeoGraph = props => {
  const {
    width,
    height,
    containerId,
    backgroundColor,
    neo4jUri,
    neo4jUser,
    neo4jPassword,
  } = props;

  // let node_id;  // eslint-disable-next-line
  // let node_click_event_flag = false; // eslint-disable-next-line

  const visRef = useRef();

  useEffect(() => {
    visRef.current.node_id = 0;
    visRef.current.node_click_event_flag = false;
    const config = {
      container_id: visRef.current.id,
      server_url: neo4jUri,
      server_user: neo4jUser,
      server_password: neo4jPassword,
      labels: {
        Herb: {
          caption: "English_name",
          size: 1.5,
        },
        Gene: {
          caption: "s_name",
          size: 0.5,
        },
        Mol: {
          caption: "s_name",
          size: 1.0,
        },
        TCM_symptom: {
          caption: "s_name",
          size: 0.8,
        },
        MM_symptom: {
          caption: "s_name",
          size: 0.8,
        },
        Disease: {
          caption: "s_name",
          size: 1.2,
        },
        // [NeoVis.NEOVIS_DEFAULT_CONFIG]: {
        //     "caption": "s_name",
        //     //"size": "defaultPagerank",
        //     //"community": "defaultCommunity"
        //     //"sizeCypher": "defaultSizeCypher"

        // }
      },
      relationships: {
        // RETWEETS: {
        //   caption: false,
        //   thickness: "count",
        // },
      },
      initial_cypher: "MATCH (n:Herb) RETURN n LIMIT 25",
    };
    const vis = new Neovis(config);
    vis.render();

    vis.registerOnEvent("completed", e => {
      if (!visRef.current.node_click_event_flag) {
        vis["_network"].on("click", event => {
          if (event["nodes"][0]) {
            if (visRef.current.node_id === event["nodes"][0]) {
              console.log(vis);
              vis.updateWithCypher(
                "MATCH r=(s)-->() WHERE ID(s) = " +
                  visRef.current.node_id +
                  " RETURN r"
              );
            } else {
              visRef.current.node_id = event["nodes"][0];
            }
          }
        });
        visRef.current.node_click_event_flag = true;
      }
    });
  }, [neo4jUri, neo4jUser, neo4jPassword]);

  return (
    <div
      id={containerId}
      ref={visRef}
      style={{
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `${backgroundColor}`,
      }}
    />
  );
};

NeoGraph.defaultProps = {
  width: 600,
  height: 600,
  backgroundColor: "#d3d3d3",
};

NeoGraph.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  containerId: PropTypes.string.isRequired,
  neo4jUri: PropTypes.string.isRequired,
  neo4jUser: PropTypes.string.isRequired,
  neo4jPassword: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

const ResponsiveNeoGraph = props => {
  const [resizeListener, sizes] = useResizeAware();

  const side = Math.max(sizes.width, sizes.height) / 2;
  const neoGraphProps = { ...props, width: side, height: side };
  return (
    <div style={{ position: "relative" }}>
      {resizeListener}
      <NeoGraph {...neoGraphProps} />
    </div>
  );
};

ResponsiveNeoGraph.defaultProps = {
  backgroundColor: "#d3d3d3",
};

ResponsiveNeoGraph.propTypes = {
  containerId: PropTypes.string.isRequired,
  neo4jUri: PropTypes.string.isRequired,
  neo4jUser: PropTypes.string.isRequired,
  neo4jPassword: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export { NeoGraph, ResponsiveNeoGraph };

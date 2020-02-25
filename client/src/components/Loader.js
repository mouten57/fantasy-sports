import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const MyLoader = props => {
  return (
    <div>
      <Segment style={{ height: "100vh", border: "none" }}>
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>

        {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
      </Segment>
    </div>
  );
};
export default MyLoader;

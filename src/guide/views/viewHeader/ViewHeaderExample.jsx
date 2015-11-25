
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  DateRange,
  IconEllipsis,
  ViewHeader,
  ViewHeaderNav,
} from '../../../framework/framework.js';

export default class ViewHeaderExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const links = [{
      className: 'is-view-header-nav-link-selected',
      href: '#',
      children: (
        <span>
          <span className="icon glyphicons-car" />
          Automobile
        </span>
      ),
    }, {
      href: '#',
      children: (
        <span>
          <span className="icon glyphicons-train" />
          Train
        </span>
      ),
    }, {
      href: '#',
      children: (
        <span>
          <span className="icon glyphicons-airplane" />
          Airplane
        </span>
      ),
    }, {
      href: '#',
      children: (
        <span>
          <span className="icon glyphicons-bicycle" />
          Bicycle
        </span>
      ),
    }, {
      href: '#',
      children: (
        <span>
          <span className="icon glyphicons-person-walking" />
          Walking
        </span>
      ),
    }, {
      href: '#',
      children: (
        <span className="viewHeaderNav__ellipsis">
          <IconEllipsis/>
        </span>
      ),
    }];

    // react-router's Link component can also be used instead of anchor tag.
    const linkType = 'a';

    return (
      <Page title={this.props.route.name}>

        <Example>
          <ViewHeader
            left={
              <ViewHeaderNav
                linkType={linkType}
                links={links}
              />
            }
            right={<DateRange/>}
          />
        </Example>

        <Example title="ViewHeaderNav" isDark>
          <Text>Allows the user to add a navigation to the ViewHeader.</Text>
          <ViewHeaderNav
            linkType={linkType}
            links={links}
          />
        </Example>

      </Page>
    );
  }

}

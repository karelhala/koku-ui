import { css } from '@patternfly/react-styles';
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createMapStateToProps } from 'store/common';
import { uiSelectors } from 'store/ui';
import { BackgroundImage } from '../backgroundImage';
import { styles } from './page.styles';

interface Props {
  masthead: React.ReactNode;
  sidebar: React.ReactNode;
  isSidebarOpen: boolean;
}

const PageBase: React.SFC<Props> = ({
  children,
  masthead,
  sidebar,
  isSidebarOpen,
}) => (
  <>
    <Helmet>
      <body className={css(styles.body, isSidebarOpen && styles.noScroll)} />
    </Helmet>
    <BackgroundImage />
    {masthead}
    <main className={css(styles.main)}>{children}</main>
    {sidebar}
  </>
);

const Page = connect(
  createMapStateToProps(state => ({
    isSidebarOpen: uiSelectors.selectIsSidebarOpen(state),
  }))
)(PageBase);

export { Page, PageBase, Props };

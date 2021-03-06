import { RootState } from '../rootReducer';
import {
  getQueryForWidget,
  ocpDashboardDefaultFilters,
  ocpDashboardStateKey,
} from './ocpDashboardCommon';

export const selectOcpDashboardState = (state: RootState) =>
  state[ocpDashboardStateKey];

export const selectWidgets = (state: RootState) =>
  selectOcpDashboardState(state).widgets;

export const selectWidget = (state: RootState, id: number) =>
  selectWidgets(state)[id];

export const selectCurrentWidgets = (state: RootState) =>
  selectOcpDashboardState(state).currentWidgets;

export const selectWidgetQueries = (state: RootState, id: number) => {
  const widget = selectWidget(state, id);

  return {
    previous: getQueryForWidget(widget, {
      ...ocpDashboardDefaultFilters,
      time_scope_value: -2,
    }),
    current: getQueryForWidget(widget, ocpDashboardDefaultFilters),
    tabs: getQueryForWidget(widget, {
      ...ocpDashboardDefaultFilters,
      resolution: 'monthly',
    }),
  };
};

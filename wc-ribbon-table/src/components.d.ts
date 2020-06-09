/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface WcRibbonTable {
    'baseApiUrl': string;
    /**
    * Reading biolink data. This will trigger a render of the table as would changing data
    */
    'bioLinkData': string;
    /**
    * Must follow the appropriate JSON data model Can be given as either JSON or stringified JSON
    */
    'data': string;
    /**
    * Filter rows based on the presence of one or more values in a given column The filtering will be based on cell label or id Example: filter-by="evidence:ISS,ISO or multi-step filters: filter-by:evidence:ISS,ISO;term:xxx" Note: if value is "", remove any filtering
    */
    'filterBy': string;
    'groupBaseUrl': string;
    /**
    * Using this parameter, the table rows can bee grouped based on column ids A multiple step grouping is possible by using a ";" between groups The grouping applies before the ordering Example: hid-1,hid-3 OR hid-1,hid-3;hid-2 Note: if value is "", remove any grouping
    */
    'groupBy': string;
    /**
    * Used to hide specific column of the table
    */
    'hideColumns': string;
    /**
    * This is used to sort the table depending of a column The column cells must be single values The ordering applies after the grouping Note: if value is "", remove any ordering
    */
    'orderBy': string;
    'showCurie': () => Promise<void>;
    'showOriginalTable': () => Promise<void>;
    'showTable': () => Promise<void>;
    'subjectBaseUrl': string;
  }
}

declare global {


  interface HTMLWcRibbonTableElement extends Components.WcRibbonTable, HTMLStencilElement {}
  var HTMLWcRibbonTableElement: {
    prototype: HTMLWcRibbonTableElement;
    new (): HTMLWcRibbonTableElement;
  };
  interface HTMLElementTagNameMap {
    'wc-ribbon-table': HTMLWcRibbonTableElement;
  }
}

declare namespace LocalJSX {
  interface WcRibbonTable {
    'baseApiUrl'?: string;
    /**
    * Reading biolink data. This will trigger a render of the table as would changing data
    */
    'bioLinkData'?: string;
    /**
    * Must follow the appropriate JSON data model Can be given as either JSON or stringified JSON
    */
    'data'?: string;
    /**
    * Filter rows based on the presence of one or more values in a given column The filtering will be based on cell label or id Example: filter-by="evidence:ISS,ISO or multi-step filters: filter-by:evidence:ISS,ISO;term:xxx" Note: if value is "", remove any filtering
    */
    'filterBy'?: string;
    'groupBaseUrl'?: string;
    /**
    * Using this parameter, the table rows can bee grouped based on column ids A multiple step grouping is possible by using a ";" between groups The grouping applies before the ordering Example: hid-1,hid-3 OR hid-1,hid-3;hid-2 Note: if value is "", remove any grouping
    */
    'groupBy'?: string;
    /**
    * Used to hide specific column of the table
    */
    'hideColumns'?: string;
    /**
    * This is used to sort the table depending of a column The column cells must be single values The ordering applies after the grouping Note: if value is "", remove any ordering
    */
    'orderBy'?: string;
    'subjectBaseUrl'?: string;
  }

  interface IntrinsicElements {
    'wc-ribbon-table': WcRibbonTable;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'wc-ribbon-table': LocalJSX.WcRibbonTable & JSXBase.HTMLAttributes<HTMLWcRibbonTableElement>;
    }
  }
}



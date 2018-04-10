/**
 *
 * Asynchronously loads the component for AddressBook
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

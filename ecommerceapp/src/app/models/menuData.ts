import {Menu, SubMenu} from './menu';

export let MenuData: Menu[] = [new Menu('Home', 'pi pi-fw  pi-home', 'Home',
  [ new SubMenu('Notification', 'pi pi-arrow-right', 'Home/Notification')]),

  new Menu('Product', 'pi pi-fw pi-external-link', 'Product',
    [new SubMenu('Gallery', 'pi pi-arrow-right', 'Product/Gallery'),
      new SubMenu('Search', 'pi pi-arrow-right', 'Product/Search'),

    ]),
    new Menu('About', 'pi pi-fw pi-check', 'About',
      []),
  new Menu('Order', 'pi pi-fw pi-shopping-cart', 'Order',
    [new SubMenu('Add', 'pi pi-arrow-right', 'Order/Add'),
      new SubMenu('Edit', 'pi pi-arrow-right', 'Order/Edit'),
      new SubMenu('Delete', 'pi pi-arrow-right', 'Order/Delete')]
   )

];

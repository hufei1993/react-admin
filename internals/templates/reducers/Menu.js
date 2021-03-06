const defaultState = {
  namespace: 'menuReducer',
  menu: [
    {
      linkName: '导航1',
      link: '/one',
      id: '1',
      icon: 'picture',
      children: []
    },
    {
      linkName: '导航2',
      link: '/two',
      id: '2',
      icon: 'folder-open',
      children: [
        {
          linkName: '导航21',
          link: '/two/one',
          id: '2-1',
          icon: 'book',
          children: []
        },
        {
          linkName: '导航22',
          link: '/two/two',
          id: '2-2',
          icon: 'team',
          children: []
        }
      ]
    },
    {
      linkName: '导航3',
      link: '/three',
      id: '3',
      icon: 'phone',
      children: [
        {
          linkName: '导航31',
          link: '/three/one',
          id: '3-1',
          icon: 'dashboard',
          children: [
            {
              linkName: '导航311',
              link: '/three/one/one',
              id: '3-1-1',
              icon: 'windows',
              children: []
            }
          ]
        },
        {
          linkName: '导航32',
          link: '/three/two',
          id: '3-2',
          icon: 'security-scan',
          children: []
        }
      ]
    },
    {
      linkName: '导航4',
      link: '/four',
      id: '4',
      icon: 'coffee',
      children: []
    }
  ],
  defaultSelectedKeys: ['1'],
  defaultOpenKeys: ['1']
};
const menuReducer = (state = defaultState, action) => {
  if (action.namespace && action.namespace !== state.namespace) {
    return state;
  }
  switch (action.type) {
  case 'MENU':
    return Object.assign({}, state, action.data);
  default:
    return state;
  }
};
export default menuReducer;

// Smart DataTable
export var settings = {
  columns: {
    id: {
      title: 'ID',
      filter: false,
    },
    name: {
      title: 'Full Name',
      filter: false,
    },
    username: {
      title: 'User Name',
      filter: false,
    },
    email: {
      title: 'Email',
      filter: false,
    }
  },
  attr: {
    class: "table table-responsive"
  },
  edit:{
    editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
  },
  delete:{
    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  }
};


export var filtersettings = {
  columns: {
    id: {
      title: 'ID',
    },
    name: {
      title: 'Full Name',
      filter: {
        type: 'list',
        config: {
          selectText: 'Select...',
          list: [
            { value: 'Glenna Reichert', title: 'Glenna Reichert' },
            { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
            { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
          ],
        },
      },
    },
    email: {
      title: 'Email',
    },
    passed: {
      title: 'Passed',
      filter: {
        type: 'checkbox',
        config: {
          true: 'Yes',
          false: 'No',
          resetText: 'clear',
        },
      },
    },
  },
  attr: {
    class: "table table-responsive"
  },
  edit:{
    editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
  },
  delete:{
    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  }
};


export var alertsettings = {
  delete: {
    confirmDelete: true,
    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  },
  add: {
    confirmCreate: true,
  },
  edit: {
    confirmSave: true,
    editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
  },
  columns: {
    id: {
      title: 'ID',
    },
    name: {
      title: 'Full Name',
    },
    username: {
      title: 'User Name',
    },
    email: {
      title: 'Email',
    },
  },
  attr: {
    class: "table table-responsive"
  },
};


export var assetsettings = {
  actions: false,
  selectMode: 'multi',
  columns: {
    id: {
      title: 'ID',
      filter: false
    },
    tag: {
      title: 'Tag',
      filter: false
    },
    model: {
      title: 'Model',
      filter: false
    },
    status_cd: {
      title: 'Status',
      filter: false
    }
  },
  attr: {
    class: "table table-responsive"
  },
  edit:{
    editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
  },
  delete:{
    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  }
};

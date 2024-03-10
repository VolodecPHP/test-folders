import { RootFolder } from '../clients/localStorageClient';
import { search } from '../helpers/search';
import { describe, expect, it } from 'vitest';

const DATA_EXAMPLE: RootFolder = {
  id: '__root__',
  name: '__root__',
  protectionLevel: 'admin',
  type: 'folder',
  path: '',
  children: {
    'folder-1': {
      id: 'folder-1',
      name: 'folder-1',
      protectionLevel: 'admin',
      type: 'folder',
      path: 'folder-1',
      children: {
        'file-1': {
          id: 'file-1',
          name: 'file-1',
          protectionLevel: 'user',
          type: 'file',
          extension: 'txt',
          path: 'folder-1/file-1',
        },
        'file-1-1': {
          id: 'file-1-1',
          name: 'file-1-1',
          protectionLevel: 'user',
          type: 'file',
          extension: 'svg',
          path: 'folder-1/file-1-1',
        },
        'file-3-abc': {
          id: 'file-3-abc',
          name: 'file-3-abc',
          protectionLevel: 'user',
          type: 'file',
          extension: 'pdf',
          path: 'folder-1/file-3-abc',
        },
        'folder-2': {
          id: 'folder-2',
          name: 'folder-2',
          protectionLevel: 'user',
          type: 'folder',
          path: 'folder-1/folder-2',
          children: {
            'file-4': {
              id: 'file-4',
              name: 'file-4',
              protectionLevel: 'user',
              type: 'file',
              extension: 'txt',
              path: 'folder-1/folder-2/file-4',
            },
            'file-31': {
              id: 'file-31',
              name: 'file-31',
              protectionLevel: 'user',
              type: 'file',
              extension: 'svg',
              path: 'folder-1/folder-2/file-31',
            },
            'file-6': {
              id: 'file-6',
              name: 'file-6',
              protectionLevel: 'user',
              type: 'file',
              extension: 'pdf',
              path: 'folder-1/folder-2/file-6',
            },
            'folder-3': {
              id: 'folder-3',
              name: 'folder-3',
              protectionLevel: 'user',
              type: 'folder',
              path: 'folder-1/folder-2/folder-3',
              children: {
                'file-31-1': {
                  id: 'file-31-1',
                  name: 'file-31-1',
                  protectionLevel: 'user',
                  type: 'file',
                  extension: 'pdf',
                  path: 'folder-1/folder-2/folder-3/file-31-1',
                },
                'folder-4-abc': {
                  id: 'folder-4-abc',
                  name: 'folder-4-abc',
                  protectionLevel: 'user',
                  type: 'folder',
                  path: 'folder-1/folder-2/folder-3/folder-4-abc',
                  children: {
                    'file-31-1-2': {
                      id: 'file-31-1-2',
                      name: 'file-31-1-2',
                      protectionLevel: 'user',
                      type: 'file',
                      extension: 'pdf',
                      path: 'folder-1/folder-2/folder-3/folder-4-abc/file-31-1-2',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    'file-top-level': {
      id: 'file-top-level',
      name: 'file-top-level',
      protectionLevel: 'user',
      type: 'file',
      extension: 'txt',
      path: 'file-top-level',
    },
  },
};

describe('search', () => {
  it('empty search', () => {
    expect(search(DATA_EXAMPLE, '')).toEqual(DATA_EXAMPLE);
  });

  it('search file in the top level', () => {
    expect(search(DATA_EXAMPLE, 'file-top-level')).toEqual({
      id: '__root__',
      name: '__root__',
      protectionLevel: 'admin',
      type: 'folder',
      path: '',
      children: {
        'file-top-level': {
          id: 'file-top-level',
          name: 'file-top-level',
          protectionLevel: 'user',
          type: 'file',
          extension: 'txt',
          path: 'file-top-level',
        },
      },
    });
  });

  it('search folder in the top level', () => {
    expect(search(DATA_EXAMPLE, 'folder-1')).toEqual({
      id: '__root__',
      name: '__root__',
      protectionLevel: 'admin',
      type: 'folder',
      path: '',
      children: {
        'folder-1': {
          id: 'folder-1',
          name: 'folder-1',
          protectionLevel: 'admin',
          type: 'folder',
          path: 'folder-1',
          children: {
            'file-1': {
              id: 'file-1',
              name: 'file-1',
              protectionLevel: 'user',
              type: 'file',
              extension: 'txt',
              path: 'folder-1/file-1',
            },
            'file-1-1': {
              id: 'file-1-1',
              name: 'file-1-1',
              protectionLevel: 'user',
              type: 'file',
              extension: 'svg',
              path: 'folder-1/file-1-1',
            },
            'file-3-abc': {
              id: 'file-3-abc',
              name: 'file-3-abc',
              protectionLevel: 'user',
              type: 'file',
              extension: 'pdf',
              path: 'folder-1/file-3-abc',
            },
            'folder-2': {
              id: 'folder-2',
              name: 'folder-2',
              protectionLevel: 'user',
              type: 'folder',
              path: 'folder-1/folder-2',
              children: {
                'file-4': {
                  id: 'file-4',
                  name: 'file-4',
                  protectionLevel: 'user',
                  type: 'file',
                  extension: 'txt',
                  path: 'folder-1/folder-2/file-4',
                },
                'file-31': {
                  id: 'file-31',
                  name: 'file-31',
                  protectionLevel: 'user',
                  type: 'file',
                  extension: 'svg',
                  path: 'folder-1/folder-2/file-31',
                },
                'file-6': {
                  id: 'file-6',
                  name: 'file-6',
                  protectionLevel: 'user',
                  type: 'file',
                  extension: 'pdf',
                  path: 'folder-1/folder-2/file-6',
                },
                'folder-3': {
                  id: 'folder-3',
                  name: 'folder-3',
                  protectionLevel: 'user',
                  type: 'folder',
                  path: 'folder-1/folder-2/folder-3',
                  children: {
                    'file-31-1': {
                      id: 'file-31-1',
                      name: 'file-31-1',
                      protectionLevel: 'user',
                      type: 'file',
                      extension: 'pdf',
                      path: 'folder-1/folder-2/folder-3/file-31-1',
                    },
                    'folder-4-abc': {
                      id: 'folder-4-abc',
                      name: 'folder-4-abc',
                      protectionLevel: 'user',
                      type: 'folder',
                      path: 'folder-1/folder-2/folder-3/folder-4-abc',
                      children: {
                        'file-31-1-2': {
                          id: 'file-31-1-2',
                          name: 'file-31-1-2',
                          protectionLevel: 'user',
                          type: 'file',
                          extension: 'pdf',
                          path: 'folder-1/folder-2/folder-3/folder-4-abc/file-31-1-2',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  });

  it('search folder in the nested level', () => {
    expect(search(DATA_EXAMPLE, 'folder-4-abc')).toEqual({
      id: '__root__',
      name: '__root__',
      protectionLevel: 'admin',
      type: 'folder',
      path: '',
      children: {
        'folder-1': {
          id: 'folder-1',
          name: 'folder-1',
          protectionLevel: 'admin',
          type: 'folder',
          path: 'folder-1',
          children: {
            'folder-2': {
              id: 'folder-2',
              name: 'folder-2',
              protectionLevel: 'user',
              type: 'folder',
              path: 'folder-1/folder-2',
              children: {
                'folder-3': {
                  id: 'folder-3',
                  name: 'folder-3',
                  protectionLevel: 'user',
                  type: 'folder',
                  path: 'folder-1/folder-2/folder-3',
                  children: {
                    'folder-4-abc': {
                      id: 'folder-4-abc',
                      name: 'folder-4-abc',
                      protectionLevel: 'user',
                      type: 'folder',
                      path: 'folder-1/folder-2/folder-3/folder-4-abc',
                      children: {
                        'file-31-1-2': {
                          id: 'file-31-1-2',
                          name: 'file-31-1-2',
                          protectionLevel: 'user',
                          type: 'file',
                          extension: 'pdf',
                          path: 'folder-1/folder-2/folder-3/folder-4-abc/file-31-1-2',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  });

  it('search file in the nested level', () => {
    expect(search(DATA_EXAMPLE, 'file-4')).toEqual({
      id: '__root__',
      name: '__root__',
      protectionLevel: 'admin',
      type: 'folder',
      path: '',
      children: {
        'folder-1': {
          id: 'folder-1',
          name: 'folder-1',
          protectionLevel: 'admin',
          type: 'folder',
          path: 'folder-1',
          children: {
            'folder-2': {
              id: 'folder-2',
              name: 'folder-2',
              protectionLevel: 'user',
              type: 'folder',
              path: 'folder-1/folder-2',
              children: {
                'file-4': {
                  id: 'file-4',
                  name: 'file-4',
                  protectionLevel: 'user',
                  type: 'file',
                  extension: 'txt',
                  path: 'folder-1/folder-2/file-4',
                },
              },
            },
          },
        },
      },
    });
  });

  it('search multiple files in the nested level', () => {
    expect(search(DATA_EXAMPLE, 'file-1')).toEqual({
      id: '__root__',
      name: '__root__',
      protectionLevel: 'admin',
      type: 'folder',
      path: '',
      children: {
        'folder-1': {
          id: 'folder-1',
          name: 'folder-1',
          protectionLevel: 'admin',
          type: 'folder',
          path: 'folder-1',
          children: {
            'file-1': {
              id: 'file-1',
              name: 'file-1',
              protectionLevel: 'user',
              type: 'file',
              extension: 'txt',
              path: 'folder-1/file-1',
            },
            'file-1-1': {
              id: 'file-1-1',
              name: 'file-1-1',
              protectionLevel: 'user',
              type: 'file',
              extension: 'svg',
              path: 'folder-1/file-1-1',
            },
          },
        },
      },
    });
  });

  it('search file and folder', () => {
    expect(search(DATA_EXAMPLE, 'abc')).toEqual({
      id: '__root__',
      name: '__root__',
      protectionLevel: 'admin',
      type: 'folder',
      path: '',
      children: {
        'folder-1': {
          id: 'folder-1',
          name: 'folder-1',
          protectionLevel: 'admin',
          type: 'folder',
          path: 'folder-1',
          children: {
            'file-3-abc': {
              id: 'file-3-abc',
              name: 'file-3-abc',
              protectionLevel: 'user',
              type: 'file',
              extension: 'pdf',
              path: 'folder-1/file-3-abc',
            },
            'folder-2': {
              id: 'folder-2',
              name: 'folder-2',
              protectionLevel: 'user',
              type: 'folder',
              path: 'folder-1/folder-2',
              children: {
                'folder-3': {
                  id: 'folder-3',
                  name: 'folder-3',
                  protectionLevel: 'user',
                  type: 'folder',
                  path: 'folder-1/folder-2/folder-3',
                  children: {
                    'folder-4-abc': {
                      id: 'folder-4-abc',
                      name: 'folder-4-abc',
                      protectionLevel: 'user',
                      type: 'folder',
                      path: 'folder-1/folder-2/folder-3/folder-4-abc',
                      children: {
                        'file-31-1-2': {
                          id: 'file-31-1-2',
                          name: 'file-31-1-2',
                          protectionLevel: 'user',
                          type: 'file',
                          extension: 'pdf',
                          path: 'folder-1/folder-2/folder-3/folder-4-abc/file-31-1-2',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  });

  it('search results in different levels', () => {
    expect(search(DATA_EXAMPLE, 'file-3')).toEqual({
      id: '__root__',
      name: '__root__',
      protectionLevel: 'admin',
      type: 'folder',
      path: '',
      children: {
        'folder-1': {
          id: 'folder-1',
          name: 'folder-1',
          protectionLevel: 'admin',
          type: 'folder',
          path: 'folder-1',
          children: {
            'file-3-abc': {
              id: 'file-3-abc',
              name: 'file-3-abc',
              protectionLevel: 'user',
              type: 'file',
              extension: 'pdf',
              path: 'folder-1/file-3-abc',
            },
            'folder-2': {
              id: 'folder-2',
              name: 'folder-2',
              protectionLevel: 'user',
              type: 'folder',
              path: 'folder-1/folder-2',
              children: {
                'file-31': {
                  id: 'file-31',
                  name: 'file-31',
                  protectionLevel: 'user',
                  type: 'file',
                  extension: 'svg',
                  path: 'folder-1/folder-2/file-31',
                },
                'folder-3': {
                  id: 'folder-3',
                  name: 'folder-3',
                  protectionLevel: 'user',
                  type: 'folder',
                  path: 'folder-1/folder-2/folder-3',
                  children: {
                    'file-31-1': {
                      id: 'file-31-1',
                      name: 'file-31-1',
                      protectionLevel: 'user',
                      type: 'file',
                      extension: 'pdf',
                      path: 'folder-1/folder-2/folder-3/file-31-1',
                    },
                    'folder-4-abc': {
                      id: 'folder-4-abc',
                      name: 'folder-4-abc',
                      protectionLevel: 'user',
                      type: 'folder',
                      path: 'folder-1/folder-2/folder-3/folder-4-abc',
                      children: {
                        'file-31-1-2': {
                          id: 'file-31-1-2',
                          name: 'file-31-1-2',
                          protectionLevel: 'user',
                          type: 'file',
                          extension: 'pdf',
                          path: 'folder-1/folder-2/folder-3/folder-4-abc/file-31-1-2',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  });
});

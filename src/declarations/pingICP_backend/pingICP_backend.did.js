export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add_publisher' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], []),
    'add_subscriber' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'get_publisher' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'get_publishers' : IDL.Func([], [IDL.Text], ['query']),
    'get_subscriber' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'get_subscribers' : IDL.Func([], [IDL.Text], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'is_publisher' : IDL.Func([IDL.Text], [IDL.Bool], ['query']),
    'is_subscriber' : IDL.Func([IDL.Text], [IDL.Bool], ['query']),
    'publish' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'remove_publisher' : IDL.Func([IDL.Text], [], []),
    'remove_subscriber' : IDL.Func([IDL.Text], [], []),
    'subscribe' : IDL.Func([IDL.Text, IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };

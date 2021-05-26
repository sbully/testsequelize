const addmemberService = require('./addmember.service');

describe('test function', () => {
  let req;
  let res;

  beforeEach(() => {
    req = { body: {} };
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn(),
    };
    next = jest.fn();
    res.status.mockReturnValue(res);
  });

  it('should send error 401 if members not complete ', () => {
    const member = {
      firstname: 'test',
      lastname: 'test',
      email: 'test@gmail.com',
    };
    req.body = member;
    addmemberService.isCompleteMember(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalled();
  });
  it('should call next if member is complete ', () => {
    const member = {
      firstname: 'test',
      lastname: 'test',
      email: 'test@gmail.com',
      role: 'User',
    };
    req.body = member;
    addmemberService.isCompleteMember(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});

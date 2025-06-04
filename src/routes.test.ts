import { routes } from './routes'

describe('routes', () => {
  describe('blog.path', () => {
    it('returns /blog when no options provided', () => {
      expect(routes.blog.path()).toBe('/blog');
    });
    it('appends options when provided', () => {
      expect(routes.blog.path('?page=2')).toBe('/blog?page=2');
    });
  });
});

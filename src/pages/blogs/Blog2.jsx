import BlogLayout from './BlogLayout';

function Blog2() {
  return (
    <BlogLayout title="Flaky tests are worse than no tests">
      <p>
        Flaky tests are tests that sometimes pass and sometimes fail without any
        change in the application code. Over time, they become the biggest enemy
        of a test suite.
      </p>

      <p>
        When engineers stop trusting test results, they start ignoring failures.
        This completely defeats the purpose of automation and slows down delivery.
      </p>

      <p>
        A smaller, stable, and reliable test suite is always more valuable than
        a large suite filled with flaky tests.
      </p>
    </BlogLayout>
  );
}

export default Blog2;
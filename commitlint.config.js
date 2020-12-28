module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'upper-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat', // A new feature
        'fix', // A bug fix
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'ci', // Changes to CI configuration files and scripts
        'test', // Adding missing tests or correcting existing tests
        'docs', // Documentation only changes
        'perf', // A code change that improves performance
        'build', // Changes that affect the build system or external dependencies
        'style', // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
      ],
    ],
  },
};

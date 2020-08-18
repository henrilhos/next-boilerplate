module.exports = function (plop) {
  plop.setGenerator('Component', {
    description: 'Application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.component.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/spec.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
    ],
  })
}

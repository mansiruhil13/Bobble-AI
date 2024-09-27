---
name: Bug Report
description: File a bug report.
title: "[Bug]: "
labels: ["bug", "triage"]
projects: ["octo-org/1", "octo-org/44"]
assignees:
  - octocat
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report! Please provide as much detail as possible to help us understand the issue.
  - type: textarea
    id: bug-description
    attributes:
      label: Briefly describe the bug
      description: What bug are you experiencing?
      placeholder: Describe the bug...
      value: "A bug happened!"
    validations:
      required: true
  - type: textarea
    id: expected-behavior
    attributes:
      label: What is the expected behavior?
      description: How should the application behave?
      placeholder: Expected behavior...
    validations:
      required: true
  - type: textarea
    id: reproduction-steps
    attributes:
      label: Step-by-step instructions to reproduce the bug
      description: Please provide the steps to reproduce the issue.
      placeholder: Steps to reproduce...
    validations:
      required: true
  - type: dropdown
    id: version
    attributes:
      label: Version
      description: What version of our software are you running?
      options:
        - 1.0.2 (Default)
        - 1.0.3 (Edge)
      default: 0
    validations:
      required: true
  - type: dropdown
    id: browsers
    attributes:
      label: What browsers are you seeing the problem on?
      multiple: true
      options:
        - Firefox
        - Chrome
        - Safari
        - Microsoft Edge
  - type: textarea
    id: logs
    attributes:
      label: Relevant log output
      description: Please copy and paste any relevant log output. This will be automatically formatted into code.
      render: shell
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://example.com). 
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true

---

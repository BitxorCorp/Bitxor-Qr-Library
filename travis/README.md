# Travis Functions

A recollection of bash files that can be used when configuring CI/CD with travis.

- `travis-functions.sh` base line of functions. 
- `node-functions.sh` for node projects that require npm deployments and releases.
- `docker-functions.sh` for projects that generate and pushes docker images. 

These functions can be called from your Travis file (`.travis.yml`) to perform the different operations. 

To use the bash files, you can either copy them into your ./travis project folder or use a git submodule. 

In your project:

Examples:

- [bitxor-sdk-java](https://github.com/bitxorcorp/bitxor-sdk-java): gradle library project.
- [bitxor-sdk-typescript-javascript](https://github.com/bitxorcorp/bitxor-sdk-typescript-javascript): node and npm library project.
- [bitxor-bootstrap](https://github.com/bitxorcorp/catbuffer-generators): node and npm library project.
- [catbuffer-generators](https://github.com/bitxorcorp/catbuffer-generators): multi-language generation, deployment and releases
- [bitxor-openapi-generator](https://github.com/bitxorcorp/bitxor-openapi-generator): multi-language generation, deployment and releases

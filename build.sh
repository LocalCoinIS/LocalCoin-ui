cd $TRAVIS_BUILD_DIR
unamestr=`uname`

if [ "$unamestr" == 'Linux' ]
then
    npm run build
fi
## Build the binaries if this is a release tag
if [ $TRAVIS_TAG ]
then
    npm run-script package
fi
cd $TRAVIS_BUILD_DIR
unamestr=`uname`
echo TRAVIS_BRANCH=$TRAVIS_BRANCH

if [ "$unamestr" == 'Linux' ]
then
    git checkout $TRAVIS_BRANCH
    npm run build
fi
## Build the binaries if this is a release tag
if [ $TRAVIS_TAG ]
then
    npm run-script package
fi
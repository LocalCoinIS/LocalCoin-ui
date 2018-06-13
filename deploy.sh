# This script clones an existing gh-pages repository and pushes updates
# from the newly compiled version into github.
# The GITHUB_TOKEN for authentication is stored in the encrypted
# variable in .travis.yml

# Clone Repo
############
#echo "Cloning wallet repo"
unamestr=`uname`
echo $unamestr
echo $TRAVIS_TAG
if [[ "$unamestr" == 'Linux' && -n $TRAVIS_TAG ]]
then
    ## wallet.bitshares.org subdomain (independent repo)
    echo "Pushing new wallet subdomain repo"
    git clone https://github.com:${GITHUB_TOKEN}@github.com/${WALLET_REPO} $TRAVIS_BUILD_DIR/wallet.bitshares.org
    cd $TRAVIS_BUILD_DIR/wallet.bitshares.org
    git checkout gh-pages
    rm -rf ./*
    git checkout ./CNAME
    cp -Rv $TRAVIS_BUILD_DIR/build/hash-history/* .
    git add -A
    git commit -a -m "Update wallet by Travis: v$TRAVIS_TAG"
    git push
fi

echo $TRAVIS_BRANCH
echo $TRAVIS_PULL_REQUEST
if [ $unamestr = 'Linux' ] && [ $TRAVIS_BRANCH = 'staging' ] && [ -z $TRAVIS_PULL_REQUEST_BRANCH ]
then
    ## wallet.bitshares.org subdomain (independent repo)
    echo "Pushing new staging subdomain repo"
    git clone https://github.com:${GITHUB_TOKEN}@github.com/${STAGING_REPO} $TRAVIS_BUILD_DIR/staging.bitshares.org
    cd $TRAVIS_BUILD_DIR/staging.bitshares.org
    rm -rf ./*
    git checkout ./CNAME
    cp -Rv $TRAVIS_BUILD_DIR/build/hash-history/* .
    git add -A
    git commit -a -m "Update staging by Travis: v$TRAVIS_TAG"
    git push
fi


if [[ "$unamestr" == 'Linux' && "$TRAVIS_BRANCH" === "staging"]]
then
    echo "It works"
fi

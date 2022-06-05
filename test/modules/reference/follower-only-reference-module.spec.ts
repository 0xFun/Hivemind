import '@nomiclabs/hardhat-ethers';
import { expect } from 'chai';
import { FollowNFT__factory } from '../../../typechain-types';
import { ZERO_ADDRESS } from '../../helpers/constants';
import { ERRORS } from '../../helpers/errors';
import { getTimestamp, matchEvent, waitForTx } from '../../helpers/utils';
import {
<<<<<<< HEAD
  freeCollectModule,
=======
  emptyCollectModule,
>>>>>>> dd137b2 (Initial commit)
  FIRST_PROFILE_ID,
  followerOnlyReferenceModule,
  governance,
  lensHub,
  makeSuiteCleanRoom,
  MOCK_FOLLOW_NFT_URI,
  MOCK_PROFILE_HANDLE,
  MOCK_PROFILE_URI,
  MOCK_URI,
  user,
  userAddress,
<<<<<<< HEAD
  userThreeAddress,
  userTwo,
  userTwoAddress,
  abiCoder,
} from '../../__setup.spec';

makeSuiteCleanRoom('Follower Only Reference Module', function () {
  const SECOND_PROFILE_ID = FIRST_PROFILE_ID + 1;

=======
  userTwo,
  userTwoAddress,
} from '../../__setup.spec';

makeSuiteCleanRoom('Follower Only Reference Module', function () {
>>>>>>> dd137b2 (Initial commit)
  beforeEach(async function () {
    await expect(
      lensHub.createProfile({
        to: userAddress,
        handle: MOCK_PROFILE_HANDLE,
        imageURI: MOCK_PROFILE_URI,
        followModule: ZERO_ADDRESS,
        followModuleData: [],
        followNFTURI: MOCK_FOLLOW_NFT_URI,
      })
    ).to.not.be.reverted;
    await expect(
<<<<<<< HEAD
      lensHub.createProfile({
        to: userTwoAddress,
        handle: 'user2',
        imageURI: MOCK_PROFILE_URI,
        followModule: ZERO_ADDRESS,
        followModuleData: [],
        followNFTURI: MOCK_FOLLOW_NFT_URI,
      })
    ).to.not.be.reverted;
    await expect(
=======
>>>>>>> dd137b2 (Initial commit)
      lensHub
        .connect(governance)
        .whitelistReferenceModule(followerOnlyReferenceModule.address, true)
    ).to.not.be.reverted;
    await expect(
<<<<<<< HEAD
      lensHub.connect(governance).whitelistCollectModule(freeCollectModule.address, true)
=======
      lensHub.connect(governance).whitelistCollectModule(emptyCollectModule.address, true)
>>>>>>> dd137b2 (Initial commit)
    ).to.not.be.reverted;
    await expect(
      lensHub.post({
        profileId: FIRST_PROFILE_ID,
        contentURI: MOCK_URI,
<<<<<<< HEAD
        collectModule: freeCollectModule.address,
        collectModuleData: abiCoder.encode(['bool'], [true]),
=======
        collectModule: emptyCollectModule.address,
        collectModuleData: [],
>>>>>>> dd137b2 (Initial commit)
        referenceModule: followerOnlyReferenceModule.address,
        referenceModuleData: [],
      })
    ).to.not.be.reverted;
  });

  context('Negatives', function () {
    // We don't need a `publishing` or `initialization` context because initialization never reverts in the FollowerOnlyReferenceModule.
    context('Commenting', function () {
      it('Commenting should fail if commenter is not a follower and follow NFT not yet deployed', async function () {
        await expect(
<<<<<<< HEAD
          lensHub.connect(userTwo).comment({
            profileId: SECOND_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            collectModule: freeCollectModule.address,
            collectModuleData: abiCoder.encode(['bool'], [true]),
=======
          lensHub.comment({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            collectModule: emptyCollectModule.address,
            collectModuleData: [],
>>>>>>> dd137b2 (Initial commit)
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.be.revertedWith(ERRORS.FOLLOW_INVALID);
      });

      it('Commenting should fail if commenter follows, then transfers the follow NFT before attempting to comment', async function () {
<<<<<<< HEAD
        await expect(lensHub.connect(userTwo).follow([FIRST_PROFILE_ID], [[]])).to.not.be.reverted;
=======
        await expect(lensHub.follow([FIRST_PROFILE_ID], [[]])).to.not.be.reverted;
>>>>>>> dd137b2 (Initial commit)
        const followNFT = FollowNFT__factory.connect(
          await lensHub.getFollowNFT(FIRST_PROFILE_ID),
          user
        );

<<<<<<< HEAD
        await expect(
          followNFT.connect(userTwo).transferFrom(userTwoAddress, userThreeAddress, 1)
        ).to.not.be.reverted;

        await expect(
          lensHub.connect(userTwo).comment({
            profileId: SECOND_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            collectModule: freeCollectModule.address,
            collectModuleData: abiCoder.encode(['bool'], [true]),
=======
        await expect(followNFT.transferFrom(userAddress, userTwoAddress, 1)).to.not.be.reverted;

        await expect(
          lensHub.comment({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            collectModule: emptyCollectModule.address,
            collectModuleData: [],
>>>>>>> dd137b2 (Initial commit)
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.be.revertedWith(ERRORS.FOLLOW_INVALID);
      });
    });

    context('Mirroring', function () {
<<<<<<< HEAD
      it('Mirroring should fail if mirrorer is not a follower and follow NFT not yet deployed', async function () {
        await expect(
          lensHub.connect(userTwo).mirror({
            profileId: SECOND_PROFILE_ID,
=======
      it('Mirroring should fail if publisher is not a follower and follow NFT not yet deployed', async function () {
        await expect(
          lensHub.mirror({
            profileId: FIRST_PROFILE_ID,
>>>>>>> dd137b2 (Initial commit)
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.be.revertedWith(ERRORS.FOLLOW_INVALID);
      });

<<<<<<< HEAD
      it('Mirroring should fail if mirrorer follows, then transfers the follow NFT before attempting to mirror', async function () {
        await expect(lensHub.connect(userTwo).follow([FIRST_PROFILE_ID], [[]])).to.not.be.reverted;
=======
      it('Mirroring should fail if publisher follows, then transfers the follow NFT before attempting to mirror', async function () {
        await expect(lensHub.follow([FIRST_PROFILE_ID], [[]])).to.not.be.reverted;
>>>>>>> dd137b2 (Initial commit)
        const followNFT = FollowNFT__factory.connect(
          await lensHub.getFollowNFT(FIRST_PROFILE_ID),
          user
        );

<<<<<<< HEAD
        await expect(
          followNFT.connect(userTwo).transferFrom(userTwoAddress, userAddress, 1)
        ).to.not.be.reverted;

        await expect(
          lensHub.connect(userTwo).mirror({
            profileId: SECOND_PROFILE_ID,
=======
        await expect(followNFT.transferFrom(userAddress, userTwoAddress, 1)).to.not.be.reverted;

        await expect(
          lensHub.mirror({
            profileId: FIRST_PROFILE_ID,
>>>>>>> dd137b2 (Initial commit)
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.be.revertedWith(ERRORS.FOLLOW_INVALID);
      });
    });
  });

  context('Scenarios', function () {
    context('Publishing', function () {
      it('Posting with follower only reference module as reference module should emit expected events', async function () {
        const tx = lensHub.post({
          profileId: FIRST_PROFILE_ID,
          contentURI: MOCK_URI,
<<<<<<< HEAD
          collectModule: freeCollectModule.address,
          collectModuleData: abiCoder.encode(['bool'], [true]),
=======
          collectModule: emptyCollectModule.address,
          collectModuleData: [],
>>>>>>> dd137b2 (Initial commit)
          referenceModule: followerOnlyReferenceModule.address,
          referenceModuleData: [],
        });
        const receipt = await waitForTx(tx);

        expect(receipt.logs.length).to.eq(1);
        matchEvent(receipt, 'PostCreated', [
          FIRST_PROFILE_ID,
          2,
          MOCK_URI,
<<<<<<< HEAD
          freeCollectModule.address,
          abiCoder.encode(['bool'], [true]),
=======
          emptyCollectModule.address,
          [],
>>>>>>> dd137b2 (Initial commit)
          followerOnlyReferenceModule.address,
          [],
          await getTimestamp(),
        ]);
      });
    });

    context('Commenting', function () {
      it('Commenting should work if the commenter is a follower', async function () {
<<<<<<< HEAD
        await expect(lensHub.connect(userTwo).follow([FIRST_PROFILE_ID], [[]])).to.not.be.reverted;
        const followNFT = FollowNFT__factory.connect(
          await lensHub.getFollowNFT(FIRST_PROFILE_ID),
          user
        );

        await expect(
          lensHub.connect(userTwo).comment({
            profileId: SECOND_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            collectModule: freeCollectModule.address,
            collectModuleData: abiCoder.encode(['bool'], [true]),
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.not.be.reverted;
      });

      it('Commenting should work if the commenter is the publication owner and he is following himself', async function () {
=======
>>>>>>> dd137b2 (Initial commit)
        await expect(lensHub.follow([FIRST_PROFILE_ID], [[]])).to.not.be.reverted;
        const followNFT = FollowNFT__factory.connect(
          await lensHub.getFollowNFT(FIRST_PROFILE_ID),
          user
        );

        await expect(
          lensHub.comment({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
<<<<<<< HEAD
            collectModule: freeCollectModule.address,
            collectModuleData: abiCoder.encode(['bool'], [true]),
=======
            collectModule: emptyCollectModule.address,
            collectModuleData: [],
>>>>>>> dd137b2 (Initial commit)
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.not.be.reverted;
      });

<<<<<<< HEAD
      it('Commenting should work if the commenter is the publication owner even when he is not following himself and follow NFT was not deployed', async function () {
        await expect(
          lensHub.comment({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            collectModule: freeCollectModule.address,
            collectModuleData: abiCoder.encode(['bool'], [true]),
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.not.be.reverted;
      });

      it('Commenting should work if the commenter is the publication owner even when he is not following himself and follow NFT was deployed', async function () {
=======
      it('Commenting should work if the commenter follows, transfers the follow NFT then receives it back before attempting to comment', async function () {
>>>>>>> dd137b2 (Initial commit)
        await expect(lensHub.follow([FIRST_PROFILE_ID], [[]])).to.not.be.reverted;
        const followNFT = FollowNFT__factory.connect(
          await lensHub.getFollowNFT(FIRST_PROFILE_ID),
          user
        );

        await expect(followNFT.transferFrom(userAddress, userTwoAddress, 1)).to.not.be.reverted;

        await expect(
<<<<<<< HEAD
          lensHub.comment({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            collectModule: freeCollectModule.address,
            collectModuleData: abiCoder.encode(['bool'], [true]),
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.not.be.reverted;
      });

      it('Commenting should work if the commenter follows, transfers the follow NFT then receives it back before attempting to comment', async function () {
        await expect(lensHub.connect(userTwo).follow([FIRST_PROFILE_ID], [[]])).to.not.be.reverted;
        const followNFT = FollowNFT__factory.connect(
          await lensHub.getFollowNFT(FIRST_PROFILE_ID),
          user
        );

        await expect(
          followNFT.connect(userTwo).transferFrom(userTwoAddress, userAddress, 1)
        ).to.not.be.reverted;

        await expect(followNFT.transferFrom(userAddress, userTwoAddress, 1)).to.not.be.reverted;

        await expect(
          lensHub.connect(userTwo).comment({
            profileId: SECOND_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            collectModule: freeCollectModule.address,
            collectModuleData: abiCoder.encode(['bool'], [true]),
=======
          followNFT.connect(userTwo).transferFrom(userTwoAddress, userAddress, 1)
        ).to.not.be.reverted;

        await expect(
          lensHub.comment({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            collectModule: emptyCollectModule.address,
            collectModuleData: [],
>>>>>>> dd137b2 (Initial commit)
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.not.be.reverted;
      });
    });

    context('Mirroring', function () {
<<<<<<< HEAD
      it('Mirroring should work if mirrorer is a follower', async function () {
        await expect(lensHub.connect(userTwo).follow([FIRST_PROFILE_ID], [[]])).to.not.be.reverted;
        const followNFT = FollowNFT__factory.connect(
          await lensHub.getFollowNFT(FIRST_PROFILE_ID),
          user
        );

        await expect(
          lensHub.connect(userTwo).mirror({
            profileId: SECOND_PROFILE_ID,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.not.be.reverted;
      });

      it('Mirroring should work if mirrorer follows, transfers the follow NFT then receives it back before attempting to mirror', async function () {
        await expect(lensHub.connect(userTwo).follow([FIRST_PROFILE_ID], [[]])).to.not.be.reverted;
        const followNFT = FollowNFT__factory.connect(
          await lensHub.getFollowNFT(FIRST_PROFILE_ID),
          user
        );

        await expect(
          followNFT.connect(userTwo).transferFrom(userTwoAddress, userAddress, 1)
        ).to.not.be.reverted;

        await expect(followNFT.transferFrom(userAddress, userTwoAddress, 1)).to.not.be.reverted;

        await expect(
          lensHub.connect(userTwo).mirror({
            profileId: SECOND_PROFILE_ID,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.not.be.reverted;
      });

      it('Mirroring should work if the mirrorer is the publication owner and he is following himself', async function () {
=======
      it('Mirroring should work if publisher is a follower', async function () {
>>>>>>> dd137b2 (Initial commit)
        await expect(lensHub.follow([FIRST_PROFILE_ID], [[]])).to.not.be.reverted;
        const followNFT = FollowNFT__factory.connect(
          await lensHub.getFollowNFT(FIRST_PROFILE_ID),
          user
        );

        await expect(
          lensHub.mirror({
            profileId: FIRST_PROFILE_ID,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.not.be.reverted;
      });

<<<<<<< HEAD
      it('Mirroring should work if the mirrorer is the publication owner even when he is not following himself and follow NFT was not deployed', async function () {
        await expect(
          lensHub.mirror({
            profileId: FIRST_PROFILE_ID,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.not.be.reverted;
      });

      it('Mirroring should work if the mirrorer is the publication owner even when he is not following himself and follow NFT was deployed', async function () {
=======
      it('Mirroring should work if publisher follows, transfers the follow NFT then receives it back before attempting to mirror', async function () {
>>>>>>> dd137b2 (Initial commit)
        await expect(lensHub.follow([FIRST_PROFILE_ID], [[]])).to.not.be.reverted;
        const followNFT = FollowNFT__factory.connect(
          await lensHub.getFollowNFT(FIRST_PROFILE_ID),
          user
        );

        await expect(followNFT.transferFrom(userAddress, userTwoAddress, 1)).to.not.be.reverted;

        await expect(
<<<<<<< HEAD
=======
          followNFT.connect(userTwo).transferFrom(userTwoAddress, userAddress, 1)
        ).to.not.be.reverted;

        await expect(
>>>>>>> dd137b2 (Initial commit)
          lensHub.mirror({
            profileId: FIRST_PROFILE_ID,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.not.be.reverted;
      });
    });
  });
});

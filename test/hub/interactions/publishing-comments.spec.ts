import '@nomiclabs/hardhat-ethers';
import { expect } from 'chai';
import { MAX_UINT256, ZERO_ADDRESS } from '../../helpers/constants';
import { ERRORS } from '../../helpers/errors';
import { cancelWithPermitForAll, getCommentWithSigParts } from '../../helpers/utils';
import {
  abiCoder,
<<<<<<< HEAD
  freeCollectModule,
=======
  emptyCollectModule,
>>>>>>> dd137b2 (Initial commit)
  FIRST_PROFILE_ID,
  governance,
  lensHub,
  makeSuiteCleanRoom,
  mockReferenceModule,
  MOCK_FOLLOW_NFT_URI,
  MOCK_PROFILE_HANDLE,
  MOCK_PROFILE_URI,
  MOCK_URI,
  OTHER_MOCK_URI,
  testWallet,
  timedFeeCollectModule,
  userAddress,
  userTwo,
} from '../../__setup.spec';

makeSuiteCleanRoom('Publishing Comments', function () {
  context('Generic', function () {
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
        lensHub.connect(governance).whitelistCollectModule(freeCollectModule.address, true)
=======
        lensHub.connect(governance).whitelistCollectModule(emptyCollectModule.address, true)
>>>>>>> dd137b2 (Initial commit)
      ).to.not.be.reverted;

      await expect(
        lensHub.connect(governance).whitelistCollectModule(timedFeeCollectModule.address, true)
      ).to.not.be.reverted;

      await expect(
        lensHub.connect(governance).whitelistReferenceModule(mockReferenceModule.address, true)
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
          referenceModule: ZERO_ADDRESS,
          referenceModuleData: [],
        })
      ).to.not.be.reverted;
    });

    context('Negatives', function () {
      it('UserTwo should fail to publish a comment to a profile owned by User', async function () {
        await expect(
          lensHub.connect(userTwo).comment({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            collectModule: ZERO_ADDRESS,
<<<<<<< HEAD
            collectModuleData: abiCoder.encode(['bool'], [true]),
=======
            collectModuleData: [],
>>>>>>> dd137b2 (Initial commit)
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.be.revertedWith(ERRORS.NOT_PROFILE_OWNER_OR_DISPATCHER);
      });

      it('User should fail to comment with an unwhitelisted collect module', async function () {
        await expect(
          lensHub.comment({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            collectModule: ZERO_ADDRESS,
<<<<<<< HEAD
            collectModuleData: abiCoder.encode(['bool'], [true]),
=======
            collectModuleData: [],
>>>>>>> dd137b2 (Initial commit)
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.be.revertedWith(ERRORS.COLLECT_MODULE_NOT_WHITELISTED);
      });

      it('User should fail to comment with an unwhitelisted reference module', async function () {
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
            referenceModule: userAddress,
            referenceModuleData: [],
          })
        ).to.be.revertedWith(ERRORS.REFERENCE_MODULE_NOT_WHITELISTED);
      });

      it('User should fail to comment with invalid collect module data format', async function () {
        await expect(
          lensHub.comment({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 1,
            collectModule: timedFeeCollectModule.address,
            collectModuleData: [0x2, 0x12, 0x20],
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.be.revertedWith(ERRORS.NO_REASON_ABI_DECODE);
      });

      it('User should fail to comment with invalid reference module data format', async function () {
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
            referenceModule: mockReferenceModule.address,
            referenceModuleData: [0x12, 0x23],
          })
        ).to.be.revertedWith(ERRORS.NO_REASON_ABI_DECODE);
      });

      it('User should fail to comment on a publication that does not exist', async function () {
        await expect(
          lensHub.comment({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
<<<<<<< HEAD
            pubIdPointed: 3,
            collectModule: freeCollectModule.address,
            collectModuleData: abiCoder.encode(['bool'], [true]),
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.be.revertedWith(ERRORS.PUBLICATION_DOES_NOT_EXIST);
      });

      it('User should fail to comment on the same comment they are creating (pubId = 2, commentCeption)', async function () {
        await expect(
          lensHub.comment({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 2,
            collectModule: freeCollectModule.address,
            collectModuleData: abiCoder.encode(['bool'], [true]),
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.be.revertedWith(ERRORS.CANNOT_COMMENT_ON_SELF);
=======
            pubIdPointed: 2,
            collectModule: emptyCollectModule.address,
            collectModuleData: [],
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.be.revertedWith(ERRORS.PUBLICATION_DOES_NOT_EXIST);
>>>>>>> dd137b2 (Initial commit)
      });
    });

    context('Scenarios', function () {
      it('User should create a comment with empty collect module data, reference module, and reference module data, fetched comment data should be accurate', async function () {
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

        const pub = await lensHub.getPub(FIRST_PROFILE_ID, 2);
        expect(pub.profileIdPointed).to.eq(FIRST_PROFILE_ID);
        expect(pub.pubIdPointed).to.eq(1);
        expect(pub.contentURI).to.eq(MOCK_URI);
<<<<<<< HEAD
        expect(pub.collectModule).to.eq(freeCollectModule.address);
=======
        expect(pub.collectModule).to.eq(emptyCollectModule.address);
>>>>>>> dd137b2 (Initial commit)
        expect(pub.collectNFT).to.eq(ZERO_ADDRESS);
        expect(pub.referenceModule).to.eq(ZERO_ADDRESS);
      });

      it('User should create a post using the mock reference module as reference module, then comment on that post', async function () {
        const data = abiCoder.encode(['uint256'], ['1']);
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
            referenceModule: mockReferenceModule.address,
            referenceModuleData: data,
          })
        ).to.not.be.reverted;

        await expect(
          lensHub.comment({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
<<<<<<< HEAD
            collectModule: freeCollectModule.address,
            collectModuleData: abiCoder.encode(['bool'], [true]),
=======
            collectModule: emptyCollectModule.address,
            collectModuleData: [],
>>>>>>> dd137b2 (Initial commit)
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: 2,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
          })
        ).to.not.be.reverted;
      });
    });
  });

  context('Meta-tx', function () {
    beforeEach(async function () {
      await expect(
        lensHub.connect(testWallet).createProfile({
          to: testWallet.address,
          handle: MOCK_PROFILE_HANDLE,
          imageURI: MOCK_PROFILE_URI,
          followModule: ZERO_ADDRESS,
          followModuleData: [],
          followNFTURI: MOCK_FOLLOW_NFT_URI,
        })
      ).to.not.be.reverted;

      await expect(
<<<<<<< HEAD
        lensHub.connect(governance).whitelistCollectModule(freeCollectModule.address, true)
=======
        lensHub.connect(governance).whitelistCollectModule(emptyCollectModule.address, true)
>>>>>>> dd137b2 (Initial commit)
      ).to.not.be.reverted;

      await expect(
        lensHub.connect(testWallet).post({
          profileId: FIRST_PROFILE_ID,
          contentURI: MOCK_URI,
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

    context('Negatives', function () {
      it('Testwallet should fail to comment with sig with signature deadline mismatch', async function () {
        const nonce = (await lensHub.sigNonces(testWallet.address)).toNumber();
<<<<<<< HEAD
        const collectModuleData = abiCoder.encode(['bool'], [true]);
=======
        const collectModuleData = [];
>>>>>>> dd137b2 (Initial commit)
        const referenceModuleData = [];

        const { v, r, s } = await getCommentWithSigParts(
          FIRST_PROFILE_ID,
          MOCK_URI,
          FIRST_PROFILE_ID,
          '1',
          ZERO_ADDRESS,
          collectModuleData,
          ZERO_ADDRESS,
          referenceModuleData,
          nonce,
          '0'
        );

        await expect(
          lensHub.commentWithSig({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: '1',
<<<<<<< HEAD
            collectModule: ZERO_ADDRESS,
=======
            collectModule: userAddress,
>>>>>>> dd137b2 (Initial commit)
            collectModuleData: collectModuleData,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: referenceModuleData,
            sig: {
              v,
              r,
              s,
              deadline: MAX_UINT256,
            },
          })
        ).to.be.revertedWith(ERRORS.SIGNATURE_INVALID);
      });

      it('Testwallet should fail to comment with sig with invalid deadline', async function () {
        const nonce = (await lensHub.sigNonces(testWallet.address)).toNumber();
        const collectModuleData = [];
        const referenceModuleData = [];

        const { v, r, s } = await getCommentWithSigParts(
          FIRST_PROFILE_ID,
          MOCK_URI,
          FIRST_PROFILE_ID,
          '1',
          ZERO_ADDRESS,
          collectModuleData,
          ZERO_ADDRESS,
          referenceModuleData,
          nonce,
          '0'
        );

        await expect(
          lensHub.commentWithSig({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: '1',
            collectModule: ZERO_ADDRESS,
            collectModuleData: collectModuleData,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: referenceModuleData,
            sig: {
              v,
              r,
              s,
              deadline: '0',
            },
          })
        ).to.be.revertedWith(ERRORS.SIGNATURE_EXPIRED);
      });

      it('Testwallet should fail to comment with sig with invalid nonce', async function () {
        const nonce = (await lensHub.sigNonces(testWallet.address)).toNumber();
        const collectModuleData = [];
        const referenceModuleData = [];

        const { v, r, s } = await getCommentWithSigParts(
          FIRST_PROFILE_ID,
          MOCK_URI,
          FIRST_PROFILE_ID,
          '1',
          ZERO_ADDRESS,
          collectModuleData,
          ZERO_ADDRESS,
          referenceModuleData,
          nonce + 1,
          MAX_UINT256
        );

        await expect(
          lensHub.commentWithSig({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: '1',
            collectModule: ZERO_ADDRESS,
            collectModuleData: collectModuleData,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: referenceModuleData,
            sig: {
              v,
              r,
              s,
              deadline: MAX_UINT256,
            },
          })
        ).to.be.revertedWith(ERRORS.SIGNATURE_INVALID);
      });

      it('Testwallet should fail to comment with sig with unwhitelisted collect module', async function () {
        const nonce = (await lensHub.sigNonces(testWallet.address)).toNumber();
        const collectModuleData = [];
        const referenceModuleData = [];

        const { v, r, s } = await getCommentWithSigParts(
          FIRST_PROFILE_ID,
          MOCK_URI,
          FIRST_PROFILE_ID,
          '1',
<<<<<<< HEAD
          userAddress,
=======
          ZERO_ADDRESS,
>>>>>>> dd137b2 (Initial commit)
          collectModuleData,
          ZERO_ADDRESS,
          referenceModuleData,
          nonce,
          MAX_UINT256
        );

        await expect(
          lensHub.commentWithSig({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: '1',
<<<<<<< HEAD
            collectModule: userAddress,
=======
            collectModule: ZERO_ADDRESS,
>>>>>>> dd137b2 (Initial commit)
            collectModuleData: collectModuleData,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: referenceModuleData,
            sig: {
              v,
              r,
              s,
              deadline: MAX_UINT256,
            },
          })
        ).to.be.revertedWith(ERRORS.COLLECT_MODULE_NOT_WHITELISTED);
      });

      it('TestWallet should fail to comment with sig with unwhitelisted reference module', async function () {
        await expect(
<<<<<<< HEAD
          lensHub.connect(governance).whitelistCollectModule(freeCollectModule.address, true)
        ).to.not.be.reverted;

        const nonce = (await lensHub.sigNonces(testWallet.address)).toNumber();
        const collectModuleData = abiCoder.encode(['bool'], [true]);
=======
          lensHub.connect(governance).whitelistCollectModule(emptyCollectModule.address, true)
        ).to.not.be.reverted;

        const nonce = (await lensHub.sigNonces(testWallet.address)).toNumber();
        const collectModuleData = [];
>>>>>>> dd137b2 (Initial commit)
        const referenceModuleData = [];

        const { v, r, s } = await getCommentWithSigParts(
          FIRST_PROFILE_ID,
          MOCK_URI,
          FIRST_PROFILE_ID,
          '1',
<<<<<<< HEAD
          freeCollectModule.address,
=======
          emptyCollectModule.address,
>>>>>>> dd137b2 (Initial commit)
          collectModuleData,
          mockReferenceModule.address,
          referenceModuleData,
          nonce,
          MAX_UINT256
        );

        await expect(
          lensHub.commentWithSig({
            profileId: FIRST_PROFILE_ID,
            contentURI: MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: '1',
<<<<<<< HEAD
            collectModule: freeCollectModule.address,
=======
            collectModule: emptyCollectModule.address,
>>>>>>> dd137b2 (Initial commit)
            collectModuleData: collectModuleData,
            referenceModule: mockReferenceModule.address,
            referenceModuleData: referenceModuleData,
            sig: {
              v,
              r,
              s,
              deadline: MAX_UINT256,
            },
          })
        ).to.be.revertedWith(ERRORS.REFERENCE_MODULE_NOT_WHITELISTED);
      });

      it('TestWallet should fail to comment with sig on a publication that does not exist', async function () {
        await expect(
<<<<<<< HEAD
          lensHub.connect(governance).whitelistCollectModule(freeCollectModule.address, true)
        ).to.not.be.reverted;

        const nonce = (await lensHub.sigNonces(testWallet.address)).toNumber();
        const collectModuleData = abiCoder.encode(['bool'], [true]);
        const referenceModuleData = [];

        const { v, r, s } = await getCommentWithSigParts(
          FIRST_PROFILE_ID,
          OTHER_MOCK_URI,
          FIRST_PROFILE_ID,
          '3',
          freeCollectModule.address,
          collectModuleData,
          ZERO_ADDRESS,
          referenceModuleData,
          nonce,
          MAX_UINT256
        );

        await expect(
          lensHub.commentWithSig({
            profileId: FIRST_PROFILE_ID,
            contentURI: OTHER_MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: '3',
            collectModule: freeCollectModule.address,
            collectModuleData: collectModuleData,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: referenceModuleData,
            sig: {
              v,
              r,
              s,
              deadline: MAX_UINT256,
            },
          })
        ).to.be.revertedWith(ERRORS.PUBLICATION_DOES_NOT_EXIST);
      });

      it('TestWallet should fail to comment with sig on the comment they are creating (commentCeption)', async function () {
        await expect(
          lensHub.connect(governance).whitelistCollectModule(freeCollectModule.address, true)
=======
          lensHub.connect(governance).whitelistCollectModule(emptyCollectModule.address, true)
>>>>>>> dd137b2 (Initial commit)
        ).to.not.be.reverted;

        const nonce = (await lensHub.sigNonces(testWallet.address)).toNumber();
        const collectModuleData = [];
        const referenceModuleData = [];

        const { v, r, s } = await getCommentWithSigParts(
          FIRST_PROFILE_ID,
          OTHER_MOCK_URI,
          FIRST_PROFILE_ID,
          '2',
<<<<<<< HEAD
          freeCollectModule.address,
=======
          emptyCollectModule.address,
>>>>>>> dd137b2 (Initial commit)
          collectModuleData,
          ZERO_ADDRESS,
          referenceModuleData,
          nonce,
          MAX_UINT256
        );

        await expect(
          lensHub.commentWithSig({
            profileId: FIRST_PROFILE_ID,
            contentURI: OTHER_MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: '2',
<<<<<<< HEAD
            collectModule: freeCollectModule.address,
=======
            collectModule: emptyCollectModule.address,
>>>>>>> dd137b2 (Initial commit)
            collectModuleData: collectModuleData,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: referenceModuleData,
            sig: {
              v,
              r,
              s,
              deadline: MAX_UINT256,
            },
          })
<<<<<<< HEAD
        ).to.be.revertedWith(ERRORS.CANNOT_COMMENT_ON_SELF);
=======
        ).to.be.revertedWith(ERRORS.PUBLICATION_DOES_NOT_EXIST);
>>>>>>> dd137b2 (Initial commit)
      });

      it('TestWallet should sign attempt to comment with sig, cancel via empty permitForAll, then fail to comment with sig', async function () {
        await expect(
<<<<<<< HEAD
          lensHub.connect(governance).whitelistCollectModule(freeCollectModule.address, true)
        ).to.not.be.reverted;

        const nonce = (await lensHub.sigNonces(testWallet.address)).toNumber();
        const collectModuleData = abiCoder.encode(['bool'], [true]);
=======
          lensHub.connect(governance).whitelistCollectModule(emptyCollectModule.address, true)
        ).to.not.be.reverted;

        const nonce = (await lensHub.sigNonces(testWallet.address)).toNumber();
        const collectModuleData = [];
>>>>>>> dd137b2 (Initial commit)
        const referenceModuleData = [];

        const { v, r, s } = await getCommentWithSigParts(
          FIRST_PROFILE_ID,
          OTHER_MOCK_URI,
          FIRST_PROFILE_ID,
          '1',
<<<<<<< HEAD
          freeCollectModule.address,
=======
          emptyCollectModule.address,
>>>>>>> dd137b2 (Initial commit)
          collectModuleData,
          ZERO_ADDRESS,
          referenceModuleData,
          nonce,
          MAX_UINT256
        );

        await cancelWithPermitForAll();

        await expect(
          lensHub.commentWithSig({
            profileId: FIRST_PROFILE_ID,
            contentURI: OTHER_MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: '1',
<<<<<<< HEAD
            collectModule: freeCollectModule.address,
=======
            collectModule: emptyCollectModule.address,
>>>>>>> dd137b2 (Initial commit)
            collectModuleData: collectModuleData,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: referenceModuleData,
            sig: {
              v,
              r,
              s,
              deadline: MAX_UINT256,
            },
          })
        ).to.be.revertedWith(ERRORS.SIGNATURE_INVALID);
      });
    });

    context('Scenarios', function () {
      it('TestWallet should comment with sig, fetched comment data should be accurate', async function () {
        await expect(
<<<<<<< HEAD
          lensHub.connect(governance).whitelistCollectModule(freeCollectModule.address, true)
        ).to.not.be.reverted;

        const nonce = (await lensHub.sigNonces(testWallet.address)).toNumber();
        const collectModuleData = abiCoder.encode(['bool'], [true]);
=======
          lensHub.connect(governance).whitelistCollectModule(emptyCollectModule.address, true)
        ).to.not.be.reverted;

        const nonce = (await lensHub.sigNonces(testWallet.address)).toNumber();
        const collectModuleData = [];
>>>>>>> dd137b2 (Initial commit)
        const referenceModuleData = [];

        const { v, r, s } = await getCommentWithSigParts(
          FIRST_PROFILE_ID,
          OTHER_MOCK_URI,
          FIRST_PROFILE_ID,
          '1',
<<<<<<< HEAD
          freeCollectModule.address,
=======
          emptyCollectModule.address,
>>>>>>> dd137b2 (Initial commit)
          collectModuleData,
          ZERO_ADDRESS,
          referenceModuleData,
          nonce,
          MAX_UINT256
        );

        await expect(
          lensHub.commentWithSig({
            profileId: FIRST_PROFILE_ID,
            contentURI: OTHER_MOCK_URI,
            profileIdPointed: FIRST_PROFILE_ID,
            pubIdPointed: '1',
<<<<<<< HEAD
            collectModule: freeCollectModule.address,
=======
            collectModule: emptyCollectModule.address,
>>>>>>> dd137b2 (Initial commit)
            collectModuleData: collectModuleData,
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: referenceModuleData,
            sig: {
              v,
              r,
              s,
              deadline: MAX_UINT256,
            },
          })
        ).to.not.be.reverted;

        const pub = await lensHub.getPub(FIRST_PROFILE_ID, 2);
        expect(pub.profileIdPointed).to.eq(FIRST_PROFILE_ID);
        expect(pub.pubIdPointed).to.eq(1);
        expect(pub.contentURI).to.eq(OTHER_MOCK_URI);
<<<<<<< HEAD
        expect(pub.collectModule).to.eq(freeCollectModule.address);
=======
        expect(pub.collectModule).to.eq(emptyCollectModule.address);
>>>>>>> dd137b2 (Initial commit)
        expect(pub.collectNFT).to.eq(ZERO_ADDRESS);
        expect(pub.referenceModule).to.eq(ZERO_ADDRESS);
      });
    });
  });
});

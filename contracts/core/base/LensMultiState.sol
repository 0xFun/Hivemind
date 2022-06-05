// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import {Events} from '../../libraries/Events.sol';
import {DataTypes} from '../../libraries/DataTypes.sol';
import {Errors} from '../../libraries/Errors.sol';

/**
 * @title LensMultiState
 *
<<<<<<< HEAD
 * @notice This is an abstract contract that implements internal LensHub state setting and validation.
 *
 * whenNotPaused: Either publishingPaused or Unpaused.
 * whenPublishingEnabled: When Unpaused only.
=======
 * @notice This is an abstract contract that implements internal LensHub state setting and
 * validation.
>>>>>>> dd137b2 (Initial commit)
 */
abstract contract LensMultiState {
    DataTypes.ProtocolState private _state;

    modifier whenNotPaused() {
        _validateNotPaused();
        _;
    }

    modifier whenPublishingEnabled() {
        _validatePublishingEnabled();
        _;
    }

    /**
     * @dev Returns the current protocol state.
     */
    function getState() external view returns (DataTypes.ProtocolState) {
        return _state;
    }

    function _setState(DataTypes.ProtocolState newState) internal {
        DataTypes.ProtocolState prevState = _state;
        _state = newState;
        emit Events.StateSet(msg.sender, prevState, newState, block.timestamp);
    }

    function _validatePublishingEnabled() internal view {
<<<<<<< HEAD
        if (_state != DataTypes.ProtocolState.Unpaused) {
=======
        if (_state == DataTypes.ProtocolState.Paused) {
            revert Errors.Paused();
        } else if (_state == DataTypes.ProtocolState.PublishingPaused) {
>>>>>>> dd137b2 (Initial commit)
            revert Errors.PublishingPaused();
        }
    }

    function _validateNotPaused() internal view {
        if (_state == DataTypes.ProtocolState.Paused) revert Errors.Paused();
    }
}

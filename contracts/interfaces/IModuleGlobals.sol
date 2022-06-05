// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.10;

/**
 * @title IModuleGlobals
<<<<<<< HEAD
 * @author Lens Protocol
=======
 * @author Lens
>>>>>>> dd137b2 (Initial commit)
 *
 * @notice This is the interface for the ModuleGlobals contract, a data providing contract to be queried by modules
 * for the most up-to-date parameters.
 */
interface IModuleGlobals {
    /**
     * @notice Sets the governance address. This function can only be called by governance.
     *
     * @param newGovernance The new governance address to set.
     */
    function setGovernance(address newGovernance) external;

    /**
     * @notice Sets the treasury address. This function can only be called by governance.
     *
     * @param newTreasury The new treasury address to set.
     */
    function setTreasury(address newTreasury) external;

    /**
     * @notice Sets the treasury fee. This function can only be called by governance.
     *
     * @param newTreasuryFee The new treasury fee to set.
     */
    function setTreasuryFee(uint16 newTreasuryFee) external;

    /**
     * @notice Adds or removes a currency from the whitelist. This function can only be called by governance.
     *
     * @param currency The currency to add or remove from the whitelist.
     * @param toWhitelist Whether to add or remove the currency from the whitelist.
     */
    function whitelistCurrency(address currency, bool toWhitelist) external;

    /// ************************
    /// *****VIEW FUNCTIONS*****
    /// ************************

    /**
     * @notice Returns whether a currency is whitelisted.
     *
     * @param currency The currency to query the whitelist for.
     *
<<<<<<< HEAD
     * @return bool True if the queried currency is whitelisted, false otherwise.
=======
     * @return Whether the queried currency is whitelisted.
>>>>>>> dd137b2 (Initial commit)
     */
    function isCurrencyWhitelisted(address currency) external view returns (bool);

    /**
     * @notice Returns the governance address.
     *
<<<<<<< HEAD
     * @return address The governance address.
=======
     * @return The governance address.
>>>>>>> dd137b2 (Initial commit)
     */
    function getGovernance() external view returns (address);

    /**
     * @notice Returns the treasury address.
     *
<<<<<<< HEAD
     * @return address The treasury address.
=======
     * @return The treasury address.
>>>>>>> dd137b2 (Initial commit)
     */
    function getTreasury() external view returns (address);

    /**
     * @notice Returns the treasury fee.
     *
<<<<<<< HEAD
     * @return uint16 The treasury fee.
=======
     * @return The treasury fee.
>>>>>>> dd137b2 (Initial commit)
     */
    function getTreasuryFee() external view returns (uint16);

    /**
     * @notice Returns the treasury address and treasury fee in a single call.
     *
<<<<<<< HEAD
     * @return tuplee First, the treasury address, second, the treasury fee.
=======
     * @return The treasury address and the treasury fee.
>>>>>>> dd137b2 (Initial commit)
     */
    function getTreasuryData() external view returns (address, uint16);
}

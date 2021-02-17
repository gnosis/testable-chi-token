// SPDX-License-Identifier: LGPL-3.0-or-later
pragma solidity ^0.7.6;

import "../ChiToken.sol";

contract GasGuzzler {
    uint256[] list;
    ChiToken chi;

    constructor(ChiToken _chi) {
        chi = _chi;
    }

    function setSotrageAndFreeChiToken(uint256 set_count, uint256 free_count)
        external
    {
        for (uint256 i = 0; i < set_count; i++) {
            list.push(uint256(-1));
        }
        chi.free(free_count);
    }
}

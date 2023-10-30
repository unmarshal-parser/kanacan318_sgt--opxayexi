import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  OwnershipTransferred,
  Paused,
  ReceiveFromChain,
  SendToChain,
  Transfer
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(isPaused: boolean): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("isPaused", ethereum.Value.fromBoolean(isPaused))
  )

  return pausedEvent
}

export function createReceiveFromChainEvent(
  srcChainId: i32,
  nonce: BigInt,
  qty: BigInt
): ReceiveFromChain {
  let receiveFromChainEvent = changetype<ReceiveFromChain>(newMockEvent())

  receiveFromChainEvent.parameters = new Array()

  receiveFromChainEvent.parameters.push(
    new ethereum.EventParam(
      "srcChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(srcChainId))
    )
  )
  receiveFromChainEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  receiveFromChainEvent.parameters.push(
    new ethereum.EventParam("qty", ethereum.Value.fromUnsignedBigInt(qty))
  )

  return receiveFromChainEvent
}

export function createSendToChainEvent(
  dstChainId: i32,
  to: Bytes,
  qty: BigInt
): SendToChain {
  let sendToChainEvent = changetype<SendToChain>(newMockEvent())

  sendToChainEvent.parameters = new Array()

  sendToChainEvent.parameters.push(
    new ethereum.EventParam(
      "dstChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(dstChainId))
    )
  )
  sendToChainEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromBytes(to))
  )
  sendToChainEvent.parameters.push(
    new ethereum.EventParam("qty", ethereum.Value.fromUnsignedBigInt(qty))
  )

  return sendToChainEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

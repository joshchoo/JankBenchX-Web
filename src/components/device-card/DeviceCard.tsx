import React from 'react';
import { ResultAll } from '../../types';
import { faunaTimestampToDate, formatDateTime } from '../../utils/datetime';

export const DeviceCard: React.FC<{ deviceDetails: ResultAll }> = ({
  deviceDetails,
}) => {
  const {
    _id,
    _ts,
    device_name,
    device_model,
    device_board,
    device_hardware,
    android_version,
    kernel_version,
    fingerprint,
    build_type,
    build_time,
  } = deviceDetails;

  const date = faunaTimestampToDate(_ts);

  return (
    <div className="device-card">
      <div className="device-card__header">
        <div className="device-id">{`ID: ${_id}`}</div>
        <div className="result-datetime">
          {`${formatDateTime(
            date
          )} - ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`}
        </div>
      </div>
      <div className="device-card__body">
        <div className="device-card__primary-details">
          <div className="device-name">
            <div className="device-name__label">Name</div>
            <div className="device-name__value">{device_name}</div>
          </div>
          <div className="device-model">
            <div className="device-model__label">Model</div>
            <div className="device-model__value">{device_model}</div>
          </div>
          <div className="device-board">
            <div className="device-board__label">Board</div>
            <div className="device-board__value">{device_board}</div>
          </div>
          <div className="device-hardware">
            <div className="device-hardware__label">Hardware</div>
            <div className="device-hardware__value">{device_hardware}</div>
          </div>
          <div className="android-version">
            <div className="android-version__label">Android</div>
            <div className="android-version__value">{android_version}</div>
          </div>
        </div>
        <div className="device-card__secondary-details">
          <div className="kernel-version">
            <div className="kernel-version__label">Kernel Version</div>
            <div className="kernel-version__value">{kernel_version}</div>
          </div>
          <div className="fingerprint">
            <div className="fingerprint__label">Fingerprint</div>
            <div className="fingerprint__value">{fingerprint}</div>
          </div>
          <div className="build-type">
            <div className="build-type__label">Built Type</div>
            <div className="build-type__value">{build_type}</div>
          </div>
          <div className="build-time">
            <div className="built-time__label">Built Time</div>
            <div className="build-time__value">{build_time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

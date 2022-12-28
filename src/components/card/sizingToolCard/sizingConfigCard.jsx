import React from 'react';
import * as styles from './index.module.less';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { useI18next } from 'gatsby-plugin-react-i18next';

export default function SizingConfigCard(props) {
  const { bookie, broker, proxy, zookeeper, title } = props;
  const { t } = useI18next();

  return (
    <div className={clsx(styles.toolCardWrapper, styles.configCard)}>
      <Typography component="h4" className={styles.title}>
        {title}
      </Typography>

      <div className={styles.componentsWrapper}>
        {bookie && (
          <div className={styles.component}>
            <Typography component="h5" className={styles.title}>
              {t('v3trans.sizingTool.setups.bookie')}
            </Typography>
            {Object.values(bookie).map(({ key, value, size, unit, isSSD }) => (
              <div key={key} className={styles.cardLine}>
                <Typography component="span" className={styles.key}>
                  {key}:
                </Typography>
                {value && (
                  <Typography component="span" className={styles.value}>
                    &nbsp;&nbsp;{value}
                  </Typography>
                )}
                {size && (
                  <Typography component="span" className={styles.value}>
                    &nbsp;&nbsp;
                    {isSSD ? `SSD ${size} ${unit}` : `${size} ${unit}`}
                  </Typography>
                )}
              </div>
            ))}
          </div>
        )}

        {broker && (
          <div className={styles.component}>
            <Typography component="h5" className={styles.title}>
              component: {t('v3trans.sizingTool.setups.broker')}
            </Typography>
            {Object.values(broker).map(({ key, value, size, unit, isSSD }) => (
              <div key={key} className={styles.cardLine}>
                <Typography component="span" className={styles.key}>
                  {key}:
                </Typography>
                {value && (
                  <Typography component="span" className={styles.value}>
                    &nbsp;&nbsp;{value}
                  </Typography>
                )}
                {size && (
                  <Typography component="span" className={styles.value}>
                    &nbsp;&nbsp;
                    {isSSD ? `SSD ${size} ${unit}` : `${size} ${unit}`}
                  </Typography>
                )}
              </div>
            ))}
          </div>
        )}

        {proxy && (
          <div className={styles.component}>
            <Typography component="h5" className={styles.title}>
              component: {t('v3trans.sizingTool.setups.proxyLabel')}
            </Typography>
            {Object.values(proxy).map(({ key, value, size, unit, isSSD }) => (
              <div key={key} className={styles.cardLine}>
                <Typography component="span" className={styles.key}>
                  {key}:
                </Typography>
                {value && (
                  <Typography component="span" className={styles.value}>
                    &nbsp;&nbsp;{value}
                  </Typography>
                )}
                {size && (
                  <Typography component="span" className={styles.value}>
                    &nbsp;&nbsp;
                    {isSSD ? `SSD ${size} ${unit}` : `${size} ${unit}`}
                  </Typography>
                )}
              </div>
            ))}
          </div>
        )}

        {zookeeper && (
          <div className={styles.component}>
            <Typography component="h5" className={styles.title}>
              component: {t('v3trans.sizingTool.setups.zookeeper')}
            </Typography>
            {Object.values(zookeeper).map(
              ({ key, value, size, unit, isSSD }) => (
                <div key={key} className={styles.cardLine}>
                  <Typography component="span" className={styles.key}>
                    {key}:
                  </Typography>
                  {value && (
                    <Typography component="span" className={styles.value}>
                      &nbsp;&nbsp;{value}
                    </Typography>
                  )}
                  {size && (
                    <Typography component="span" className={styles.value}>
                      &nbsp;&nbsp;
                      {isSSD ? `SSD ${size} ${unit}` : `${size} ${unit}`}
                    </Typography>
                  )}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

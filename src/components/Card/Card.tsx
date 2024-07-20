import React from 'react';
import { Button, Card as CardAnt, Rate, Space } from 'antd';
import Image from 'next/image';
import { createRGBDataURL } from '@/utils/createRGBDataURL';
import './style.scss';
import Link from 'next/link';
import dayjs from 'dayjs';
import { formatCurrency } from '@/utils/formatCurrency';
import calculateDiscountedPriceAndRound from '@/utils/calculateDiscountedPriceAndRound';
import { useLocale, useTranslations } from 'next-intl';
import { LocaleEnum } from '@/store/translation/translation.type';
import PlaceIcon from '@/icons/PlaceIcon';
import { RightCircleOutlined } from '@ant-design/icons';

interface Props {
  type: 'STAYS' | 'BLOGS';
  description?: string;
  createdAt?: string;
  onClickShowMore?: () => void;
  name: string;
  rate?: number;
  amountVN: number;
  amountUS: number;
  tienVN: number;
  tienUS: number;
  discountPercentage?: number;
  staySlug: string;
  thumbnail: string;
  place: string;
}

const CardItem = ({
  // id,
  type,
  description,
  onClickShowMore,
  name,
  rate,
  amountVN,
  amountUS,
  tienVN,
  tienUS,
  discountPercentage,
  createdAt,
  staySlug,
  thumbnail,
  place,
}: Props) => {
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    // const dispatch = useAppDispatch();
    // const { token } = useAppSelector((state) => state.authSlice);

    // const addProductToCart = () => {
    //   // nếu đã đăng nhập
    //   dispatch(setTypeToCartNotification(`add-${uuidv4()}`));
    //   if (token.accessToken) {
    //     // sản phẩm đặc biệt
    //     if (!tien && !amount) {
    //       dispatch(
    //         postOrderMyBagAddItemAction({
    //           productId,
    //           productCode,
    //           name,
    //           thumbnail,
    //           weight,
    //           rate,
    //           tien,
    //           discountPercentage,
    //           sizeId,
    //           brandId,
    //           amount,
    //           productSlug,
    //           id: shoppingCart.data.id,
    //           saleOffText: saleOffText || undefined,
    //         })
    //       );
    //     } else {
    //       dispatch(
    //         postOrderMyBagAddItemAction({
    //           productId,
    //           productCode,
    //           name,
    //           thumbnail,
    //           weight,
    //           rate,
    //           tien,
    //           discountPercentage,
    //           sizeId,
    //           amount,
    //           productSlug,
    //           id: shoppingCart.data?.id,
    //           brandId,
    //           saleOffText: saleOffText || undefined,
    //         })
    //       );
    //     }
    //   } else {
    //     dispatch(
    //       addShoppingCart({
    //         id: uuidv4(),
    //         productId,
    //         productCode,
    //         name,
    //         thumbnail,
    //         weight,
    //         rate,
    //         amount,
    //         tien,
    //         discountPercentage,
    //         sizeId,
    //         brandId,
    //         productSlug,
    //         saleOffText,
    //         //
    //       })
    //     );
    //   }
    // };

    <CardAnt
      className={`${type === 'STAYS' ? 'wrapper-card' : 'wrapper-card-new'}`}
      hoverable
      cover={
        <div className="wrapper-cart-image">
          <Link href={`${type === 'BLOGS' ? '/news' : ''}/${staySlug}`}>
            <Image
              src={thumbnail as string}
              alt=""
              fill
              placeholder="blur"
              blurDataURL={createRGBDataURL(199, 199, 199)}
              sizes="100%"
            />
          </Link>
          {type === 'BLOGS' && createdAt && (
            <div className="wrapper-cart-image-time">
              <div className="wrapper-cart-image-time-content">
                <p>{dayjs(createdAt).format('DD')}</p>
                <p>{dayjs(createdAt).format('MM/YYYY')}</p>
              </div>
            </div>
          )}
          {/* <div className="wrapper-cart-tag">
            {filterRibbons.map((item: any) => (
              <p
                key={uuidv4()}
                className="wrapper-cart-tag-title"
                style={{ backgroundColor: item.background, color: item.color }}
              >
                {item?.name}
              </p>
            ))}
          </div> */}
        </div>
      }
    >
      <div className="wrapper-cart-info">
        <Link href={`${type === 'BLOGS' ? '/news' : ''}/${staySlug}`}>
          <p className="wrapper-cart-info-title">{name || ''}</p>
        </Link>
        {/* {materialName?.vi && (
          <p className="wrapper-cart-info-fabrics">Chất liệu: {materialName?.vi}</p>
        
        {type === 'PRODUCT' && !brandId && (
          <p className="wrapper-cart-info-fabrics">
            Thương hiệu: none
          </p>
        )} */}
        {type === 'STAYS' && (
          <>
            <div className="wrapper-cart-info-des">
              {/*  có giảm giá và ngôn ngữ vi */}
              {locale === LocaleEnum.vi && discountPercentage && tienVN > 0 && amountVN > 0 && (
                <Space wrap>
                  <p className="wrapper-cart-info-des-price wrapper-cart-info-des-price-discount">
                    {formatCurrency(tienVN as number, 'vi')}
                  </p>
                  <p className="wrapper-cart-info-des-price ">
                    {formatCurrency(
                      parseFloat(calculateDiscountedPriceAndRound(tienVN, discountPercentage)),
                      'vi'
                    )}{' '}
                    / {t('itemNight')}
                  </p>
                </Space>
              )}
              {/*  có giảm giá và ngôn ngữ en */}
              {locale === LocaleEnum.en && discountPercentage && tienUS > 0 && amountUS > 0 && (
                <Space wrap>
                  <p className="wrapper-cart-info-des-price wrapper-cart-info-des-price-discount">
                    {formatCurrency(tienUS as number, 'en')}
                  </p>
                  <p className="wrapper-cart-info-des-price ">
                    {formatCurrency(
                      parseFloat(calculateDiscountedPriceAndRound(tienUS, discountPercentage)),
                      'en'
                    )}{' '}
                    / {t('itemNight')}
                  </p>
                </Space>
              )}
              {/* không có tiền giảm giá và ngôn ngữ vi */}
              {locale === LocaleEnum.vi && !discountPercentage && tienVN > 0 && amountVN > 0 && (
                <Space wrap>
                  <p className="wrapper-cart-info-des-price">
                    {formatCurrency(tienVN as number, 'vi')} / {t('itemNight')}
                  </p>
                </Space>
              )}
              {/* không có tiền giảm giá và ngôn ngữ en */}
              {locale === LocaleEnum.en && !discountPercentage && tienUS > 0 && amountUS > 0 && (
                <Space wrap>
                  <p className="wrapper-cart-info-des-price">
                    {formatCurrency(tienUS as number, 'en')} / {t('itemNight')}
                  </p>
                </Space>
              )}
            </div>
            <div className="wrapper-cart-info-size">
              {rate ? <Rate disabled defaultValue={rate} /> : <Rate disabled defaultValue={5} />}{' '}
              (0)
            </div>
            {place && (
              <p className="wrapper-cart-info-place">
                <PlaceIcon /> {place}
              </p>
            )}
            <div className="wrapper-cart-info-more">
              <RightCircleOutlined />
            </div>
          </>
        )}
        {type === 'BLOGS' && (
          <>
            {description && <p className="wrapper-news-info-description">{description}</p>}
            <div className="news-btn">
              <Button className="wrapper-news-info-btn" onClick={onClickShowMore} aria-hidden>
                <p>Xem thêm</p>
              </Button>
            </div>
          </>
        )}
      </div>
    </CardAnt>
  );
};
export default CardItem;

import * as React from 'react';
import {useCallback, useState} from 'react';
import styled from 'styled-components';
import {Stars, Button} from '../molecules';
import {CommentCard} from '../../model';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import ReportModal from './report-modal';
import {useSelector} from 'react-redux';
import {tokenSelector} from '../../store/selectors/user';
import {formatDate} from '../../utils/date';

interface Props {
  comment: CommentCard;
}

const Flex1 = styled.View`
  flex: 1;
`;
const Flex3 = styled.View`
  flex: 3;
  flex-direction: row;
`;
const Bottom = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;
const Author = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;
const Date = styled.Text`
  font-size: 12px;
`;
const Content = styled.Text`
  margin-top: 10px;
  margin-bottom: 5px;
`;
const ShowMore = styled.Text`
  margin-bottom: 5px;
  font-size: 10px;
  font-style: italic;
  color: ${colors.grey};
`;
const Container = styled.View`
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  background-color: white;
  margin: 10px;
  padding: 10px;
`;

const Comment: React.FC<Props> = ({comment}) => {
  const {voter, content, date, mark, id} = comment;
  const {t} = useTranslation();
  const token = useSelector(tokenSelector);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [canShowMore, setCanShowMore] = useState<boolean>(false);
  const [showReportModal, setShowReportModal] = useState<boolean>(false);

  const onTextLayout = useCallback(e => {
    setCanShowMore(e.nativeEvent.lines.length > 4);
  }, []);

  return (
    <Container>
      <ReportModal
        show={showReportModal}
        setShow={setShowReportModal}
        evaluationId={id}
      />
      <Stars rating={mark} size={15} itemId={voter.id + date + mark} />
      <Content
        onTextLayout={onTextLayout}
        numberOfLines={showMore ? undefined : 5}>
        {content}
      </Content>
      {canShowMore && (
        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
          <ShowMore>
            {showMore ? t('common.showLess') : t('common.showMore')}
          </ShowMore>
        </TouchableOpacity>
      )}
      <Bottom>
        <Flex3>
          <Author>{voter.name + ' - '}</Author>
          <Date>{formatDate(date)}</Date>
        </Flex3>
        {token && (
          <Flex1>
            <Button
              onPress={() => setShowReportModal(true)}
              text={t('comment.report')}
              iconName="warning"
            />
          </Flex1>
        )}
      </Bottom>
    </Container>
  );
};

export default Comment;

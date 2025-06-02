import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 12px;
  text-align: center;
  color: #ff6b6b;
  font-family: 'Geist', sans-serif;
`;

const ErrorTitle = styled.h3`
  color: #ff6b6b;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const ErrorMessage = styled.p`
  color: rgba(255, 107, 107, 0.8);
  font-size: 0.9rem;
  line-height: 1.4;
`;

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorContainer>
          <ErrorTitle>🚨 Something went wrong</ErrorTitle>
          <ErrorMessage>
            We encountered an error while loading this component. 
            Please refresh the page or try again later.
          </ErrorMessage>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 